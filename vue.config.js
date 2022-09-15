// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target:'http://apis.juhe.cn',
        changeOrigin:true,
        pathRewrite:{
          "^/api":""
        }
      }
    }
  }
}
