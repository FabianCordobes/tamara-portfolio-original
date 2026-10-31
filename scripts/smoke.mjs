import assert from "node:assert/strict";
import { spawn } from "node:child_process";

const port = 4321;
const host = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(port)], {
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" }, stdio: "ignore"
});

const checks = [
  ["/", ["Necesito impulsar una marca", "Busco una profesional", "Busco una cantante"]],
  ["/servicios", ["Estrategia de marketing", "Desarrollo comercial", "Producción y coordinación"]],
  ["/proyectos", ["Full Medios", "Milpos", "Strong Fitness Gym", "Tamms", "Brush Fest"]],
  ["/perfil-profesional", ["LinkedIn", "Sobre mí", "Formación"]],
  ["/musica", ["Ruta 66", "Melódico romántico", "Folklore", "Expresión chacarera", "Galería fotográfica"]],
  ["/contacto?motivo=musica", ["Formulario de contacto", "Propuesta artística o casting", "contact-form-title"]],
  ["/contacto?motivo=empleo", ["Formulario de contacto", "Oportunidad profesional"]],
  ["/contacto?motivo=servicio", ["Formulario de contacto", "Proyecto o consultoría"]]
];

async function ready() {
  for (let i=0; i<75; i++) {
    if (server.exitCode !== null) throw Error("Server exited");
    try { if ((await fetch(host)).ok) return; } catch { /* starting */ }
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  throw Error("Server not ready");
}

try {
  await ready();
  for (const [route, snippets] of checks) {
    const res = await fetch(host + route);
    assert.equal(res.status, 200, route);
    const html = await res.text();
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, route);
    assert.ok(html.includes('id="contenido"'), route);
    assert.ok(html.includes('aria-label="Principal"'), route);
    for (const value of snippets) assert.ok(html.includes(value), `${route}: ${value}`);
    if (route === "/musica") {
      assert.ok(html.includes("sandbox="), "Preview sandbox");
      assert.ok(!html.includes("Abrir este video"), "No external video action");
      assert.equal((html.match(/class="music-track /g) ?? []).length, 4, "Four public videos");
      assert.equal((html.match(/class="music-gallery-slide"/g) ?? []).length, 2, "Two real stage photographs");
    }
    if (route.startsWith("/contacto")) {
      assert.ok(html.includes('<form'), "Contact form available on every route");
      assert.ok(html.includes('id="formulario"'), "Direct contact anchor");
    }
    console.log("PASS", route);
  }
} finally { server.kill("SIGTERM"); }
