module.exports = {
  entry: './src/app/app.tsx',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader'}
    ]
  },
  devServer: {
   port: 9000
 }
}
