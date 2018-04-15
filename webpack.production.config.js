const config = {
    mode : 'production',
    target: 'web',
    entry: './src/index.js',
    output: {
      filename: '[name].bundle.js',
      path: __dirname + '/build',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        }
      ]
    }
  };
  module.exports = config;