// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/work/baseSystem/ehr-fase-base/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/work/baseSystem/ehr-fase-base/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///C:/work/baseSystem/ehr-fase-base/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/work/baseSystem/ehr-fase-base/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx3b3JrXFxcXGJhc2VTeXN0ZW1cXFxcZWhyLWZhc2UtYmFzZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcd29ya1xcXFxiYXNlU3lzdGVtXFxcXGVoci1mYXNlLWJhc2VcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3dvcmsvYmFzZVN5c3RlbS9laHItZmFzZS1iYXNlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuLy8gaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIlxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIC8vIHZ1ZUpzeCgpLFxyXG4gICAgZHRzKClcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICcvaW1hZ2VzJzogJ3BhY2thZ2VzL2ltYWdlcycsXHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICAncGFja2FnZXMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vcGFja2FnZXMnLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgJ2xpYic6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9saWInLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgfSxcclxuICAgIGV4dGVuc2lvbnM6IFtcIi52dWVcIiwnLmpzJywgJy5qc29uJywgJy50cycsICcudHN4J10sLy9cdTRGN0ZcdTc1MjhcdTUyMkJcdTU0MERcdTc3MDFcdTc1NjVcdTc2ODRcdTU0MEVcdTdGMDBcdTU0MERcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICdsaWInLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAvLyBcdThCRjdcdTc4NkVcdTRGRERcdTU5MTZcdTkwRThcdTUzMTZcdTkwQTNcdTRFOUJcdTRGNjBcdTc2ODRcdTVFOTNcdTRFMkRcdTRFMERcdTk3MDBcdTg5ODFcdTc2ODRcdTRGOURcdThENTZcclxuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIC8vIFx1NTcyOCBVTUQgXHU2Nzg0XHU1RUZBXHU2QTIxXHU1RjBGXHU0RTBCXHU0RTNBXHU4RkQ5XHU0RTlCXHU1OTE2XHU5MEU4XHU1MzE2XHU3Njg0XHU0RjlEXHU4RDU2XHU2M0QwXHU0RjlCXHU0RTAwXHU0RTJBXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgdnVlOiAnVnVlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogJ3BhY2thZ2VzL2luZGV4LnRzJyxcclxuICAgICAgbmFtZTogJ2Voci1mYWNlLWJhc2UnLFxyXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGVoci1mYWNlLWJhc2UuJHtmb3JtYXR9LmpzYCxcclxuICAgIH0sXHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBSLFNBQVMsZUFBZSxXQUFXO0FBRTdULFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUVoQixPQUFPLFNBQVM7QUFMK0osSUFBTSwyQ0FBMkM7QUFRaE8sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBRUosSUFBSTtBQUFBLEVBQ047QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFdBQVc7QUFBQSxNQUNYLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDcEQsWUFBWSxjQUFjLElBQUksSUFBSSxjQUFjLHdDQUFlLENBQUM7QUFBQSxNQUNoRSxPQUFPLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3hEO0FBQUEsSUFDQSxZQUFZLENBQUMsUUFBTyxPQUFPLFNBQVMsT0FBTyxNQUFNO0FBQUEsRUFDbkQ7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUViLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBRU4sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsaUJBQWlCO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
