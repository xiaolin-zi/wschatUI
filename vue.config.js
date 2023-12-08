const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '/',
  devServer: {
    proxy: {
      "/api": {
        target: "chat-back.tobeyou.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace("/api", ""),
      }
    }
  },
})
