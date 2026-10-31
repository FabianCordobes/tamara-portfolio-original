import assert from "node:assert/strict";
import { spawn } from "node:child_process";

const port = 4321;
const baseURL = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(port)], {
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  stdio: "ignore"
});

const pages = [
  { path: "/", includes: ["Necesito impulsar una marca", "Busco una profesional", "Busco una cantante", 'href="/musica"'] },
  { path: "/servicios", includes: ["Estrategia de marketing", "Desarrollo comercial", "Producción y coordinación"] },
  { path: "/proyectos", includes: ["Full Medios", "Milpos", "Strong Fitness Gym", "Tamms", "Brush Fest"] },
  { path: "/perfil-profesional", includes: ["LinkedIn", "Sobre mí", "Formación"] },
  { path: "/musica", includes: ["Mi voz", "Melódico romántico", "Folklore", "Canción inédita", "drive.google.com/file/d/"] },
  { path: "/contacto?motivo=musica", includes: ["Convocar a cantar", "Seleccionado", "@tammatadia"] },
  { path: "/contacto?motivo=empleo", includes: ["Proponer un trabajo", "Seleccionado"] },
  { path: "/contacto?motivo=servicio", includes: ["Contratar servicios", "Seleccionado"] }
];

async function waitForServer() {
  for (let attempt = 0; attempt < 75; attempt++) {
    if (server.exitCode !== null) throw new Error("Next.js server exited unexpectedly.");
    try {
      const response = await fetch(baseURL);
      if (response.ok) return;
    } catch { /* server not ready yet */ }
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  throw new Error("Next.js server did not become ready.");
}

try {
  await waitForServer();
  for (const page of pages) {
    const response = await fetch(baseURL + page.path);
    assert.equal(response.status, 200, `HTTP status for ${page.path}`);
    const html = await response.text();
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `Exactly one H1 on ${page.path}`);
    assert.match(html, /<main\b[^>]*id="contenido"/, `Main landmark on ${page.path}`);
    assert.match(html, /aria-label="Principal"/, `Primary navigation on ${page.path}`);
    assert.match(html, /href="\/contacto"/, `Contact destination on ${page.path}`);
    for (const snippet of page.includes) {
      assert.ok(html.includes(snippet), `Missing "${snippet}" on ${page.path}`);
    }
    console.log(`PASS ${page.path}`);
  }
} finally {
  server.kill("SIGTERM");
}
