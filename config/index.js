"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require("path");

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      // 我们在开发开发阶段过程中，由于浏览器同源策略的限制，
      // 当本地浏览器访问后端服务时会出现跨域请求的问题。
      // 配置webpack中的proxy后，webpack会开启代理服务器，
      // 当我们在本地发送请求后，代理服务器会响应请求，
      // 并将请求转发到目标服务器，目标服务器相应数据后再将数据返回给代理服务器，
      // 最终再由代理服务器将数据响应给本地。
      // 在代理服务器和本地浏览器交互过程中，两者同源，不存在跨域行为。
      // 而同源策略是相对于浏览器来说的，代理服务器和后端服务都是服务器，
      //不存在同源策略，所以服务器之间访问不会出现跨域
      "/getJoke": {
        target: "https://api.apiopen.top", //跨域目标主机
        ws: true, //代理websockets
        changeOrigin: true, //是否跨域
        secure: false, // 协议是https的时候必须要写
        pathRewrite: {
          //  /api开头的请求会去到target下请求
          // "^/getJoke": "" //   替换/api 为空字符
        }
      }
    },
    // Various Dev Server settings
    host: "localhost", // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: "cheap-module-eval-source-map",

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, "../dist/index.html"),

    // Paths
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "./",

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: "#source-map",

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
