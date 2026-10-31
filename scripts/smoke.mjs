import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const manifest = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
assert.equal(manifest.dependencies["embla-carousel-react"], "8.6.0", "Embla React library pinned");
assert.equal(manifest.dependencies["embla-carousel-autoplay"], "8.6.0", "Official Embla autoplay plugin pinned");

assert.equal(manifest.dependencies.react, manifest.dependencies["react-dom"], "React and React DOM versions must stay synchronized");
const port = 4321;
const host = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(port)], {
  env: { ...process.env, FORMSPREE_FORM_ID: "", NEXT_TELEMETRY_DISABLED: "1" }, stdio: "ignore"
});

const checks = [
  ["/", ["Quiero desarrollar o transformar mi negocio", "Necesito producir y dirigir un proyecto", "Necesito fortalecer mi comunicación", "Conversemos sobre tu proyecto", "Full Medios", "Tamms", "Brush Fest", "Universo creativo"]],
  ["/servicios", ["Estrategia y desarrollo de negocios", "Producción y dirección de proyectos", "Comunicación y posicionamiento", "Desarrollo comercial", "Dirección y coordinación"]],
  ["/metodologia", ["Comprender", "Definir", "Diseñar", "Producir y ejecutar", "Evaluar", "Evolucionar"]],
  ["/proyectos", ["Full Medios", "Milpos", "Strong Fitness Gym", "Tamms", "Brush Fest", "Planificación y ejecución"]],
  ["/perfil-profesional", ["LinkedIn", "Sobre mí", "Trayectoria", "Formación"]],
  ["/musica", ["Ruta 66", "Melódico romántico", "Folklore", "Expresión chacarera", "Momentos del recorrido artístico", "Universo creativo"]],
  ["/contacto?motivo=musica", ["Formulario de contacto", "Colaboración artística", "contact-form-title"]],
  ["/contacto?motivo=empleo", ["Formulario de contacto", "Oportunidad profesional"]],
  ["/contacto?motivo=produccion", ["Formulario de contacto", "Producción y dirección de proyectos"]],
  ["/contacto?motivo=servicio", ["Formulario de contacto", "Estrategia y desarrollo de negocios"]],
  ["/privacidad", ["Privacidad", "Formspree"]]
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
  const extraPhotos = {
    "/": ["full-medios-estudio.jpg"],
    "/servicios": ["brush-fest-programacion.jpg"],
    "/perfil-profesional": ["tamms-formacion.jpg"],
    "/proyectos": ["tamms-escenario.jpg", "tamms-evento.jpg"]
  };
  const allExtraPhotos = Object.values(extraPhotos).flat();
  assert.equal(new Set(allExtraPhotos).size, 5, "Project photos have unique page placements");
  for (const name of allExtraPhotos) {
    assert.ok(existsSync(new URL(`../public/images/projects/${name}`, import.meta.url)), `Existing project photo: ${name}`);
  }
  for (const [route, snippets] of checks) {
    const res = await fetch(host + route);
    assert.equal(res.status, 200, route);
    const html = await res.text();
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, route);
    assert.ok(html.includes('id="contenido"'), route);
    assert.ok(html.includes('aria-label="Principal"'), route);
    for (const value of snippets) assert.ok(html.includes(value), `${route}: ${value}`);
    if (route === "/") {
      assert.ok(html.includes("home-proof"), "Home has factual proof section");
      assert.ok(html.includes("Universo creativo"), "Creative identity remains accessible");
      assert.ok(html.includes("/contacto?motivo=proyectos"), "Home provides a direct contact route");
      assert.ok(html.includes("contact_cta_click"), "Home CTA analytics are wired");
      assert.ok(html.includes('name="twitter:card"'), "Social card metadata is present");
      assert.ok(html.includes('property="og:image"'), "Open Graph image metadata is present");
    }
    for (const name of allExtraPhotos) {
      const shouldShow = (extraPhotos[route] ?? []).includes(name);
      assert.equal(html.includes(`/images/projects/${name}`), shouldShow, `Photo placement ${name} on ${route}`);
    }
    if (route === "/servicios") {
      for (const id of ["estrategia", "produccion", "comunicacion", "comercial", "direccion"]) {
        assert.ok(html.includes(`id="${id}"`), `Solutions anchor ${id}`);
      }
    }
    if (route.startsWith("/contacto")) {
      assert.ok(html.includes('name="company"'), "Optional organization field");
      assert.ok(html.includes('name="siteUrl"'), "Optional website field");
      assert.ok(html.includes('/privacidad'), "Privacy information linked");
    }
    if (route === "/proyectos") {
      assert.ok(!html.includes('class="case-results"'), "Unverified numeric metrics are hidden");
      assert.ok(html.includes("Contexto, decisiones y ejecución"), "Case process is navigable");
    }
    if (route === "/musica") {
      assert.ok(html.includes("sandbox="), "Preview sandbox");
      assert.ok(!html.includes("Abrir este video"), "No external video action");
      assert.equal((html.match(/class="music-track /g) ?? []).length, 4, "Four public videos");
      assert.equal((html.match(/class="music-gallery-slide"/g) ?? []).length, 10, "Ten original gallery photographs");
      assert.equal((html.match(/class="music-gallery-thumb /g) ?? []).length, 10, "Ten selectable thumbnails");
      assert.ok(html.includes("Reanudar avance automático"), "Carousel has accessible autoplay toggle");
      assert.ok(html.includes("music-gallery-viewport"), "Embla viewport is rendered");
      assert.ok(!html.includes("Las fotografías avanzan automáticamente"), "No instructional text under gallery");
      assert.ok(html.includes("music-gallery-thumbnail-rail"), "Photo selector restored");
      assert.ok(!html.includes("music-editorial-grid"), "Three-photo grid replaced");
      for (const file of ["canto-escenario-colores.jpg","retrato-estudio-guitarra.jpg","tamara-escenario-mar-de-ajo.jpg","retrato-vinilos.jpg","actuacion-escenario.jpg","tamara-show-mar-de-ajo.jpg","duo-musical.jpg","actuacion-television.jpg","expresion-artistica.jpg","entrevista-television.jpg"]) {
        assert.ok(existsSync(new URL(`../public/images/music/${file}`, import.meta.url)), `Photo asset exists: ${file}`);
      }
    }
    assert.ok(!/cinco proyectos|ver los cinco proyectos|proyectos seleccionados/i.test(html), "No finite project counts or repeated selection");
    if (route === "/" || route === "/servicios" || route === "/perfil-profesional") {
      assert.ok(!html.includes("project-preview-grid"), "No duplicated project cards outside case studies");
    }
    if (route.startsWith("/contacto")) {
      assert.ok(html.includes('<form'), "Contact form available on every route");
      assert.ok(html.includes('id="formulario"'), "Direct contact anchor");
    }
    console.log("PASS", route);
  }

  for (const imagePath of ["/opengraph-image", "/twitter-image"]) {
    const response = await fetch(host + imagePath);
    assert.equal(response.status, 200, `Social image endpoint ${imagePath}`);
    assert.ok(response.headers.get("content-type")?.startsWith("image/png"), `Social image PNG ${imagePath}`);
    assert.ok((await response.arrayBuffer()).byteLength > 10000, `Social image has content ${imagePath}`);
    console.log("PASS", imagePath);
  }

  const endpoint = host + "/api/contact";
  const foreignOrigin = await fetch(endpoint, {
    method: "POST",
    headers: { Origin: "https://otro-sitio.example", "Content-Type": "application/json" },
    body: "{}"
  });
  assert.equal(foreignOrigin.status, 403, "Contact rejects cross-origin requests");

  const badContentType = await fetch(endpoint, {
    method: "POST",
    headers: { Origin: host, "Content-Type": "text/plain" },
    body: "{}"
  });
  assert.equal(badContentType.status, 415, "Contact rejects unsupported content types");

  const invalidJson = await fetch(endpoint, {
    method: "POST",
    headers: { Origin: host, "Content-Type": "application/json" },
    body: "{"
  });
  assert.equal(invalidJson.status, 400, "Contact rejects invalid JSON");

  const invalidConsent = await fetch(endpoint, {
    method: "POST",
    headers: { Origin: host, "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Nombre de prueba",
      email: "ejemplo@example.com",
      intent: "Estrategia y desarrollo de negocios",
      message: "Esta consulta sirve para verificar las validaciones del endpoint.",
      consent: false,
      startedAt: Date.now(),
      website: ""
    })
  });
  assert.equal(invalidConsent.status, 400, "Contact requires explicit consent");
  const configuredLater = await fetch(endpoint, {
    method: "POST",
    headers: { Origin: host, "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Nombre de prueba",
      email: "ejemplo@example.com",
      intent: "Estrategia y desarrollo de negocios",
      message: "Esta consulta verifica que no se envíen datos sin configurar Formspree.",
      consent: true,
      startedAt: Date.now(),
      website: ""
    })
  });
  assert.equal(configuredLater.status, 503, "Contact does not attempt delivery without a Formspree form ID");
  assert.equal(configuredLater.headers.get("cache-control"), "no-store", "Contact responses are not cached");
  console.log("PASS /api/contact validation and unconfigured provider");
} finally { server.kill("SIGTERM"); }
