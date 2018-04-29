const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
  modify: (config, { target, dev }, webpack) => {
  	let appConfig = config;
    // do something to config
    const isServer = target !== "web";

    let resolve = {
  		alias: {
        '~': path.resolve(__dirname),
  			'@': path.resolve(__dirname, 'src'),
        common: path.resolve(__dirname, 'src/common'),
        assets: path.resolve(__dirname, 'src/common/assets'),
        components: path.resolve(__dirname, 'src/common/components'),
        pages: path.resolve(__dirname, 'src/common/pages'),
        store: path.resolve(__dirname, 'src/common/store')
  		}
    };

    appConfig.resolve ? appConfig.resolve = Object.assign(appConfig.resolve, resolve) : appConfig.resolve = resolve;

    const postCssLoader = {
      loader: "postcss-loader",
      options: {
        ident: "postcss",
        plugins: () => [
          autoprefixer({
            browsers: [
              ">1%",
              "last 4 versions",
              "Firefox ESR",
              "not ie < 9"
            ]
          })
        ]
      }
    };

    const sassLoader = {
      loader: "sass-loader",
      options: {
        includePaths: [
          path.resolve(__dirname, "../node_modules")
        ],
        precision: 8
      }
    };

    appConfig.module.rules.push({
      test: /\.scss$/,
      use: isServer ? ["css-loader", sassLoader] : (
        dev ? [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: false, sourceMap: true }
          },
          postCssLoader,
          sassLoader
        ] : ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: { importLoaders: 1 }
            },
            postCssLoader,
            sassLoader
          ]
        })
      )
    });

    if (!isServer && !dev) {
      appConfig.plugins.push(new ExtractTextPlugin("static/css/[name].[contenthash:8].css"));
    }
    if (!isServer) {
      appConfig.plugins.push(new ReactLoadablePlugin({
          filename: './build/react-loadable.json',
        })
      );
    }
    
    return appConfig;
  }
}