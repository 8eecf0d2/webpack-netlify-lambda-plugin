# Webpack Netlify Lambda Plugin

Small helper library to build Netlify Lambda compatible javascript

### config()
The simplest usage is with the `config()` method.

You can pass in an object with `srcdir`, `files`, `outdir` and `override` props - they do what you'd expect.

##### Input
```js
const webpackNetlifyLambdaPlugin = require("webpack-netlify-lambda-plugin");

const webpackConfig = webpackNetlifyLambdaPlugin.config({
  outdir: "./build",
  srcdir: "./src/main/",
  files: [
    "foo-func.js",
    "bar-func.js",
    "nested/qak-func.js",
  ],
  override: {
    plugins: [ ... ]
  }
});

module.exports = webpackConfig;
```

##### Output

```js
{
  target: "node",
  mode: "development",
  entry: {
    "foo-func": "./src/main/foo-func.js",
    "bar-func": "./src/main/bar-func.js",
    "nested-qak-func": "./src/main/nested/qak-func.js"
  },
  resolve: { extentions: [ ".js" ] },
  plugins: [ ... ],
  output: {
    path: "./build",
    filename: "[name].js",
    libraryTarget: "commonjs"
  }
}
```

You can write your own webpack config and just use this plugin for the annoying things like formatting `config.entry` and `config.output`.

### entry()

```js
const webpackNetlifyLambdaPlugin = require("webpack-netlify-lambda-plugin");

module.exports = {
  entry: webpackNetlifyLambdaPlugin.entry("./src/main/", [
    "foo-func.js",
    "bar-func.js",
    "nested/qak-func.js",
  ]),
  ...
};
```

### output()

```js
const webpackNetlifyLambdaPlugin = require("webpack-netlify-lambda-plugin");

module.exports = {
  output: webpackNetlifyLambdaPlugin.output("./build"),
  ...
};
```