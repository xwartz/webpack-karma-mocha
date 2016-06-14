import path from 'path'

export default {
  devtool: 'eval-source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }],
    postLoaders: [{
      test: /\.js$/,
      exclude: /test\/|node_modules/,
      loaders: ['istanbul-instrumenter']
    }]
  },
  resolve: {
    alias: {
      utils: path.join(__dirname, 'src/utils')
    }
  }
}
