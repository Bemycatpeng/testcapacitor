const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /* ============ 入口 ============ */
  entry: {
    app: "./src/index.js",
  },

  /* ============ 出口 ============ */
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    // 配置每次 build 执行前，将 dist 文件夹清空
    clean: true,
  },

  /* ============ 插件 ============ */
  plugins: [
    new HtmlWebpackPlugin({
      //文件模板
      template: path.resolve(__dirname, "./src/index.html"),
      //输出文件名
      filename: "index.html",
      inject: "body",
    }),
  ],

  /* ============ loader ============ */
  module: {
    rules: [
      {
        // 基于正则匹配处理哪些文件
        test: /\.css$/,
        // 控制使用哪个加载器loader（有顺序的：数组从右到左执行）
        use: [
          "style-loader", // 把编译好的css插入到页面的HEAD中（内嵌式样式）
          "css-loader", // 编译@import/url()这种语法的
        ],
      },
    ],
  },
};
