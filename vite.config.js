import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupNodePolyFill from 'rollup-plugin-polyfill-node'
import {NodeGlobalsPolyfillPlugin} from "@esbuild-plugins/node-globals-polyfill";
import {NodeModulesPolyfillPlugin} from "@esbuild-plugins/node-modules-polyfill";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: { 
    chunkSizeWarningLimit: 3000,
    commonjsOptions: { transformMixedEsModules: true }, // Change
            // outDir: 'build'
            rollupOptions: {
                plugins: [
                  rollupNodePolyFill()
                ]
            }
  },
  server: {
    host: "0.0.0.0",
    port: 3003
  },
  preview: {
    port: 3004
  },
  optimizeDeps: {
            esbuildOptions: {
              // Node.js global to browser globalThis
              define: {
                global: 'globalThis'
              },
              // Enable esbuild polyfill plugins
              plugins: [
                NodeGlobalsPolyfillPlugin({
                  buffer: true, 
                  process: true,
                }), 
                NodeModulesPolyfillPlugin() 
              ]
            }
          }, 
});
