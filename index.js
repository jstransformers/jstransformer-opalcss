'use strict';

var opal = require('opalcss')
var extend = require('extend-shallow')
var Promise = require('promise')

exports.name = 'opalcss'
exports.inputFormats = ['opal', 'opalcss']
exports.outputFormat = 'css'

exports.renderAsync = function (str, options, locals) {
  return new Promise(function (resolve, reject) {
    var opts = extend({}, options || {}, locals || {})
    opal.process(str, opts).then(function (result) {
      resolve(result.css)
    }, reject)
  })
}
