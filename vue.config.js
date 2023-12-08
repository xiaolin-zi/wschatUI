const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  server: {
    proxy: {
      "/api": {
        target: "chat-back.tobeyou.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace("/api", ""),
      },
    }
  },
})
