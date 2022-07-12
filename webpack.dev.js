const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development", // 开发模式

  /* ============ 使用源映射，方便开发环境调试。 ============ */
  devtool: "inline-source-map",

  /* ============ webpacke 提供的本地开发服务器 ============ */
  devServer: {
    static: "./dist",
    hot: true,
  },
});
