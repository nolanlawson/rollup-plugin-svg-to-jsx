'use strict'

var svgToJsx = require('svg-to-jsx')
var MagicString = require('magic-string')
var createFilter = require('rollup-pluginutils').createFilter

module.exports = function (options) {
  options = options || {}
  var filter = createFilter(options.include || '**/*.svg', options.exclude)
  return {
    transform: function sourceToCode (code, id) {
      if (!filter(id)) return null

      var s = new MagicString(code)
      return svgToJsx(code).then(function (jsx) {
        var result = 'export default (' + jsx + ')'
        s.overwrite(0, code.length, result)
        return {
          code: s.toString(),
          map: s.generateMap({ hires: true })
        }
      })
    }
  }
}
