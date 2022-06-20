const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // only add this if you don't have yet
const { ModuleFederationPlugin } = webpack.container;
const deps = require("./package.json").dependencies; // webpack.config.js or any name you gave it

module.exports = {
  output: {
    publicPath: "auto",
  },
  mode: "development",
  devServer: {
    port: 6001,
    open: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "modal",
      filename: "remoteEntry.js",
      library: { type: "var", name: "modal" },
      exposes: {
        "./Modal": "./src/App.tsx",
        "./Renderer": "./src/renderer.js",
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
        "@mui/material": {
          singleton: true,
          eager: true,
          requiredVersion: deps["@mui/material"],
        },
        "@emotion/react": {
          singleton: true,
          eager: true,
          requiredVersion: deps["@emotion/react"],
        },
        "@emotion/styled": {
          singleton: true,
          eager: true,
          requiredVersion: deps["@emotion/styled"],
        },
        "@date-io/date-fns": {
          singleton: true,
          eager: true,
          requiredVersion: deps["@date-io/date-fns"],
        },
        "@material-ui/core": {
          singleton: true,
          eager: true,
          requiredVersion: deps["@material-ui/core"],
        },
        "@material-ui/pickers": {
          singleton: true,
          eager: true,
          requiredVersion: deps["@material-ui/pickers"],
        },
        "date-fns": {
          singleton: true,
          eager: true,
          requiredVersion: deps["date-fns"],
        },
        "react-material-ui-calendar": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-material-ui-calendar"],
        },
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
