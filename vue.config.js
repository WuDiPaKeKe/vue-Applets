const path = require("path")
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave:false,
  devServer:{
    proxy: {
      '/9000': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/9000': '' },
      }
    },
  },
  configureWebpack:{
    resolve: {
      alias: {
        "components":resolve("src/components"),
        "pages":resolve("src/pages"),
        "router":resolve("src/router"),
        "routes":resolve("src/routes"),
        "store":resolve("src/store"),
        "api":resolve("src/api"),
        "mock":resolve("src/mock")
      }
    }
  }
}
