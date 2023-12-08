const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer: {
  //   proxy: {
  //     'https://chat-back.tobeyou.cn/api': {
  //       target: 'https://chat-back.tobeyou.cn', // 注意！此处为后端提供的真实接口
  //       changeOrigin: true, // 允许跨域
  //       pathRewrite: {
  //         '^/https://chat-back.tobeyou.cn/api': '' // 重写路径
  //       }
  //     }
  //   }
  // }
})
