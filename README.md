<a href="https://travis-ci.org/yohangz/rollup-plugin-ignore-import">
    <img src="https://travis-ci.org/yohangz/rollup-plugin-ignore-import.svg?branch=master" alt="travis build" height="18">
</a>
<a href="https://github.com/yohangz/rollup-plugin-ignore-import/blob/master/LICENSE">
    <img src="http://img.shields.io/badge/license-MIT-blue.svg?style=flat" alt="license" height="18">
</a>  
<a href="https://badge.fury.io/js/rollup-plugin-ignore-import">
    <img src="https://badge.fury.io/js/rollup-plugin-ignore-import.svg" alt="npm version" height="18">
</a>

# rollup-plugin-ignore-import

Ignore import depending on the file extension. Useful when running 

## Installation

Via [Yarn](https://yarnpkg.com/lang/en/)

```yarn add rollup-plugin-ignore-import --save-dev```

Via [NPM](https://www.npmjs.com/)

```npm install rollup-plugin-ignore-import --save-dev```

## Usage

### Using `extensions`

```js
// rollup.config.js
import ignoreImport from 'rollup-plugin-ignore-import';

export default {
  entry: 'entry.js',
  dest: 'bundle.js',
  plugins: [
    ignoreImport({
      // Ignore all .scss and .css file imports while building the bundle
      extensions: ['.scss', '.css'],
      // Optional: replace body for ignored files. Default value is "export default undefined;"
      body: 'export default undefined;'
    })
  ]
}
```

### Using `include`

```js
// rollup.config.js
import ignoreImport from 'rollup-plugin-ignore-import';

export default {
  entry: 'entry.js',
  dest: 'bundle.js',
  plugins: [
    ignoreImport({
      // Ignore all .scss and .css file imports while building the bundle
      include: ['**/*.scss', '**/*.css'],
      // Optional: replace body for ignored files. Default value is "export default undefined;"
      body: 'export default undefined;'
    })
  ]
}
```

## License

This software is licensed under the [MIT][license] License

[license]: https://github.com/yohangz/rollup-plugin-ignore-import/blob/master/LICENSE
