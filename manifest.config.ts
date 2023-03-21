import { defineManifest } from "@crxjs/vite-plugin"

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name: env.mode === "staging" ? "[INTERNAL] Tes" : "Test",
  // up to four numbers separated by dots
  version: `1.0.0`,
  permissions: ["tabs", "storage", "activeTab", "scripting"],
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  action: {
    default_popup: "index.html",
  },
  host_permissions: ["*://*/"],
  cross_origin_embedder_policy: {
    value: "require-corp",
  },
  cross_origin_opener_policy: {
    value: "same-origin",
  },
}))
