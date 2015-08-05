'use strict';

var opal = require('opalcss')
var extend = require('extend-shallow')

exports.name = 'opalcss'
exports.inputFormats = ['opal', 'opalcss', 'css', 'scss', 'sass']
exports.outputFormat = 'css'

exports.render = function (str, opts, locals) {
  opts = opts && typeof opts === 'object' ? opts : {}
  locals = locals && typeof locals === 'object' ? locals : {}
  var options = extend({}, opts, locals)

  return opal.process(str, opts).css
}
