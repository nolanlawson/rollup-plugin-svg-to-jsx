var assert = require('assert')
var rollup = require('rollup')
var thePlugin = require('..')
var fs = require('fs')
var babel = require('rollup-plugin-babel')

process.chdir(__dirname)

/* global describe,it */

describe('rollup-plugin-svg-to-jsx', function () {
  var tests = fs.readdirSync('samples')

  tests.forEach(function (testName) {
    it(`test: ${testName}`, function () {
      return rollup.rollup({
        input: `samples/${testName}/input.svg`,
        plugins: [
          thePlugin(),
          babel({
            presets: ['react'],
            plugins: ['external-helpers'],
            externalHelpers: true
          })
        ],
        external: ['react']
      }).then(function (bundle) {
        return bundle.generate({
          format: 'es'
        })
      }).then(function (generated) {
        var code = generated.code
        var expected = fs.readFileSync(`samples/${testName}/expected.js`, 'utf8')
        assert.equal(code, expected)
      })
    })
  })
})
