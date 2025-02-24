new ModuleFederationPlugin({
    name: "host",
    remotes: {
      chat: "chat@http://localhost:3001/remoteEntry.js",
      email: "email@http://localhost:3002/remoteEntry.js",
    },
    shared: ["react", "react-dom", "react-router-dom"],
  })
  