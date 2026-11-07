// Lokale Vorschau des GitHub-Pages-Builds (out/) – verhält sich wie GitHub Pages:
// Projektpfad als Präfix, index.html pro Ordner, 404.html mit Status 404.
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "out");
const base = process.env.PAGES_BASE_PATH ?? "/ld-path-to-beyond";
const port = Number(process.env.PORT ?? 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".htm": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json",
};

async function isFile(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

function send(res, status, file) {
  res.writeHead(status, { "Content-Type": types[extname(file)] ?? "application/octet-stream" });
  createReadStream(file).pipe(res);
}

createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  let path = decodeURIComponent(url.pathname);

  if (path === "/" || !path.startsWith(base)) {
    res.writeHead(302, { Location: `${base}/` });
    return res.end();
  }

  path = normalize(path.slice(base.length) || "/");
  if (path.includes("..")) {
    res.writeHead(400);
    return res.end();
  }

  const file = join(root, path);
  if (await isFile(file)) return send(res, 200, file);
  if (await isFile(join(file, "index.html"))) {
    if (!url.pathname.endsWith("/")) {
      res.writeHead(301, { Location: `${url.pathname}/` });
      return res.end();
    }
    return send(res, 200, join(file, "index.html"));
  }
  send(res, 404, join(root, "404.html"));
}).listen(port, () => {
  console.log(`GitHub-Pages-Vorschau: http://localhost:${port}${base}/`);
});
