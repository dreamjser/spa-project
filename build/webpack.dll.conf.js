const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    vendor: ['babel-polyfill', 'vue', 'vue-router', 'vuex', 'fastclick']
  },
  output: {
    path: path.resolve(__dirname, '../static'),
    filename: '[name].js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '[name]-manifest.json'),
      name: '[name]_library'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

webpack(config, (err, stats) => {
  if (err) {
    throw err;
  }

  console.log('build success!');
});
