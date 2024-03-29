const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = () => [
  new HtmlWebPackPlugin({
    template: "blog/index/index.html",
    filename: "w/index.html",
  }),
  new HtmlWebPackPlugin({
    template: "blog/posts/source-level-polymorphism/index.html",
    filename: "w/source-level-polymorphism/index.html",
  }),
  new HtmlWebPackPlugin({
    template: "blog/posts/synthesis/index.html",
    filename: "w/synthesis/index.html",
  }),
  new HtmlWebPackPlugin({
    template: "blog/posts/cactus-harvesting/index.html",
    filename: "w/cactus-harvesting/index.html",
  }),
  new HtmlWebPackPlugin({
    template: "blog/posts/the-conjoined-villages/index.html",
    filename: "w/the-conjoined-villages/index.html",
  }),
  new HtmlWebPackPlugin({
    template: "blog/posts/sprint-log-2019-03-08/index.html",
    filename: "w/sprint-log-2019-03-08/index.html",
  }),
  new HtmlWebPackPlugin({
    template: "blog/posts/nemawashi/index.html",
    filename: "w/nemawashi/index.html",
  }),
  new HtmlWebPackPlugin({
    template: "blog/posts/reflections-on-learning-rust/index.html",
    filename: "w/reflections-on-learning-rust/index.html",
  }),
  new HtmlWebPackPlugin({
    template: "blog/posts/social-coding-2018/index.html",
    filename: "w/social-coding-2018/index.html",
  }),
  new HtmlWebPackPlugin({
    template: "blog/posts/secrets-in-parameter-store-postmortem/index.html",
    filename: "w/secrets-in-parameter-store-postmortem/index.html",
  }),
  new HtmlWebPackPlugin({
    template: "blog/posts/terraform-blue-green/index.html",
    filename: "w/terraform-blue-green/index.html",
  }),
  new HtmlWebPackPlugin({
    template: "blog/posts/aws-org-chart/index.html",
    filename: "w/aws-org-chart/index.html",
  }),
  new HtmlWebPackPlugin({
    template: "blog/posts/engineering-finance-partnership/index.html",
    filename: "w/engineering-finance-partnership/index.html",
  }),
];
