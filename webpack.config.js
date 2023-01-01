const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const csso = require("optimize-css-assets-webpack-plugin");
const path = require('path');

module.exports = {
    entry:"./src/assets/js/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'assets/js/bundle.js',
      },
      devServer:{
        static: {

            directory: path.join(__dirname, 'build'),
    
        },
        port:2000,
        devMiddleware: {
            writeToDisk: true
         },
         hot: false,
         liveReload: true,
         open: true,
    },
      module: {
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
            generator : {
                  filename : 'assets/images/[name][ext][query]',
            }
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator : {
                 filename : 'assets/fonts/[name][ext][query]',
             }
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',          
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
           },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
        }),
        new HtmlWebpackPlugin({
          template:"./src/istanbul-vacation.html",
          filename:"istanbul-vacation.html",
        }),
        new HtmlWebpackPlugin({
          template:"./src/egypt-vacation.html",
          filename:"egypt-vacation.html",
        }),
        new HtmlWebpackPlugin({
          template:"./src/log-in.html",
          filename:"log-in.html",
        }),
        new HtmlWebpackPlugin({
          template:"./src/sing-up.html",
          filename:"sing-up.html",
        }),
        new MiniCssExtractPlugin({
            filename:"assets/css/style.css"
        }),
        new csso({}),
  ],
};