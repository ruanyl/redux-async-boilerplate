module.exports = {
  context: __dirname,
  entry: [
    'babel-polyfill',
    './index.js',
    './index.html'
  ],

  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style/url!file'
      }
    ]
  },

  devtool: 'source-map',

  externals: {
    //'react': 'React'
  }
};
