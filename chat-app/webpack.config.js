const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "chatApp",
      filename: "remoteEntry.js",
      exposes: {
        "./ChatApp": "./src/ChatApp",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
};
