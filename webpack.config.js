module.exports = {
  entry: './src/index.ts',
  target: ['web'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'simpleSlideToggle.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devServer: {
    contentBase: './',
    publicPath: '/dist/',
    open: true,
    openPage: 'sample/index.html'
  }
}
