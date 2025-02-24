new ModuleFederationPlugin({
    name: "email",
    filename: "remoteEntry.js",
    exposes: {
      "./EmailApp": "./src/EmailApp",
    },
    shared: ["react", "react-dom", "react-router-dom"],
  });
  