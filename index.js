'use strict';

var opal = require('opalcss');
var postcss = require('jstransformer-postcss');
var extend = require('extend-shallow');

exports.name = 'opalcss';
exports.inputFormats = ['opal', 'opalcss'];
exports.outputFormat = 'css';

exports.render = function (str, opts) {
  opts = extend({plugins: [opal(opts)]}, opts);
  return postcss.render(str, opts);
};
