rollup-plugin-svg-to-jsx [![Build Status](https://travis-ci.org/nolanlawson/rollup-plugin-svg-to-jsx.svg?branch=master)](https://travis-ci.org/nolanlawson/rollup-plugin-svg-to-jsx)
=====

Rollup plugin for [svg-to-jsx](https://github.com/janjakubnanista/svg-to-jsx).

```bash
npm install rollup-plugin-svg-to-jsx
```

Config:

```js
// rollup.config.js
import svgToJsx from 'rollup-plugin-svg-to-jsx'

export default {
  input: './index.js',
  output: {
    file: './bundle.js',
    format: 'es'
  },
  plugins: [
    svgToJsx()
  ]
}
```

Or with options:

```js
// rollup.config.js
import svgToJsx from 'rollup-plugin-svg-to-jsx'

export default {
  input: './index.js',
  output: {
    file: './bundle.js',
    format: 'es'
  },
  plugins: [
    svgToJsx({
      include: '**/*.svg', // anything to include, default is '**/*.svg'
      exclude: 'file-to-exclude.svg' // anything to exclude
    })
  ]
}
```

