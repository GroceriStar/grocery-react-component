'use strict';

const path = require('path');

const presets = [
  "@babel/preset-env",
  "@babel/preset-react"
];

const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ["./src/"],
      alias: {
        "~": "./src/components"
      }
    }
    // require.resolve('@babel/plugin-module-resolver')
  ]

];

module.exports = { presets, plugins };

// "babel-plugin-module-resolver": "^3.1.1",
// npx babel src --out-dir lib --ignore "src/**/*.spec.js","src/**/*.test.js"
// https://gist.github.com/nodkz/41e189ff22325a27fe6a5ca81df2cb91
