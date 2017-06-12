'use strict'

const opal = require('opalcss')
const postcss = require('jstransformer-postcss')
const extend = require('extend-shallow')

exports.name = 'opalcss'
exports.inputFormats = ['opal', 'opalcss']
exports.outputFormat = 'css'

exports.renderAsync = function (str, opts) {
  opts = extend({plugins: [opal(opts)]}, opts)
  return postcss.renderAsync(str, opts)
}
