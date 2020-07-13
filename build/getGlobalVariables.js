const webpack = require('webpack');

let env = process.argv[2];

const envMaps = {
  dev: require('../config/dev.env'),
  sat: require('../config/sat.env'),
  uat: require('../config/uat.env'),
  fat: require('../config/fat.env'),
  prod: require('../config/prod.env')
};

if(!env) {
  env = 'dev';
}

const globalVariables = () => {
  return new webpack.DefinePlugin({
    GLOBAL_VARS: envMaps[env]
  });
}

module.exports = globalVariables;
