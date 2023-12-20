// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/web-work/basicFramework/ehr-fase-base/node_modules/_vite@3.2.7@vite/dist/node/index.js";
import vue from "file:///D:/web-work/basicFramework/ehr-fase-base/node_modules/_@vitejs_plugin-vue@3.2.0@@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/web-work/basicFramework/ehr-fase-base/node_modules/_@vitejs_plugin-vue-jsx@3.1.0@@vitejs/plugin-vue-jsx/dist/index.mjs";
import dts from "file:///D:/web-work/basicFramework/ehr-fase-base/node_modules/_vite-plugin-dts@3.6.4@vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/web-work/basicFramework/ehr-fase-base/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts()
  ],
  resolve: {
    alias: {
      "/images": "packages/images",
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "packages": fileURLToPath(new URL("./packages", __vite_injected_original_import_meta_url)),
      "lib": fileURLToPath(new URL("./lib", __vite_injected_original_import_meta_url))
    },
    extensions: [".vue", ".js", ".json", ".ts", ".tsx"]
  },
  build: {
    outDir: "lib",
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    },
    lib: {
      entry: "packages/index.ts",
      name: "ehr-face-base",
      fileName: (format) => `ehr-face-base.${format}.js`
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3ZWItd29ya1xcXFxiYXNpY0ZyYW1ld29ya1xcXFxlaHItZmFzZS1iYXNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3ZWItd29ya1xcXFxiYXNpY0ZyYW1ld29ya1xcXFxlaHItZmFzZS1iYXNlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93ZWItd29yay9iYXNpY0ZyYW1ld29yay9laHItZmFzZS1iYXNlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIlxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIHZ1ZUpzeCgpLFxyXG4gICAgZHRzKClcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICcvaW1hZ2VzJzogJ3BhY2thZ2VzL2ltYWdlcycsXHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICAncGFja2FnZXMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vcGFja2FnZXMnLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgJ2xpYic6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9saWInLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgfSxcclxuICAgIGV4dGVuc2lvbnM6IFtcIi52dWVcIiwnLmpzJywgJy5qc29uJywgJy50cycsICcudHN4J10sLy9cdTRGN0ZcdTc1MjhcdTUyMkJcdTU0MERcdTc3MDFcdTc1NjVcdTc2ODRcdTU0MEVcdTdGMDBcdTU0MERcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICdsaWInLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAvLyBcdThCRjdcdTc4NkVcdTRGRERcdTU5MTZcdTkwRThcdTUzMTZcdTkwQTNcdTRFOUJcdTRGNjBcdTc2ODRcdTVFOTNcdTRFMkRcdTRFMERcdTk3MDBcdTg5ODFcdTc2ODRcdTRGOURcdThENTZcclxuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIC8vIFx1NTcyOCBVTUQgXHU2Nzg0XHU1RUZBXHU2QTIxXHU1RjBGXHU0RTBCXHU0RTNBXHU4RkQ5XHU0RTlCXHU1OTE2XHU5MEU4XHU1MzE2XHU3Njg0XHU0RjlEXHU4RDU2XHU2M0QwXHU0RjlCXHU0RTAwXHU0RTJBXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgdnVlOiAnVnVlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogJ3BhY2thZ2VzL2luZGV4LnRzJyxcclxuICAgICAgbmFtZTogJ2Voci1mYWNlLWJhc2UnLFxyXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGVoci1mYWNlLWJhc2UuJHtmb3JtYXR9LmpzYCxcclxuICAgIH0sXHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtULFNBQVMsZUFBZSxXQUFXO0FBRXJWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxTQUFTO0FBTCtLLElBQU0sMkNBQTJDO0FBUWhQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLElBQUk7QUFBQSxFQUNOO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxXQUFXO0FBQUEsTUFDWCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLE1BQ3BELFlBQVksY0FBYyxJQUFJLElBQUksY0FBYyx3Q0FBZSxDQUFDO0FBQUEsTUFDaEUsT0FBTyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN4RDtBQUFBLElBQ0EsWUFBWSxDQUFDLFFBQU8sT0FBTyxTQUFTLE9BQU8sTUFBTTtBQUFBLEVBQ25EO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFFYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUVOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLGlCQUFpQjtBQUFBLElBQ3pDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
