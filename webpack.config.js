var path = require('path');

module.exports = {
  entry: {
    entry: "./app/entry.jsx",
    signup: "./app/signup.jsx"
  },
  output: {
    path: path.resolve(__dirname + '/public'),
    filename: "/javascripts/[name].js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel" },
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
