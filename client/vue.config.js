// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
          @import "@/scss/_typography.scss";
          @import "@/scss/_animations.scss";
        `
      }
    }
  },
  devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:4000",
        secure: false
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 10240 }))
  }
};
