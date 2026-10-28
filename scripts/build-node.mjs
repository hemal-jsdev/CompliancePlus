// Builds the site as a standalone Node server (output in .output/).
// The default `npm run build` targets Cloudflare (Lovable hosting); this one targets a normal server.
import { spawnSync } from "node:child_process";

const result = spawnSync("npx", ["vite", "build"], {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, NITRO_PRESET: "node-server" },
});
process.exit(result.status ?? 1);
