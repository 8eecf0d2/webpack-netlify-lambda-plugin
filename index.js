module.exports.entry = function (srcdir, files) {
	return files.reduce(function (obj, file) {
    obj[file.split(".")[0].replace(/\//g, "-")] = `${srcdir}${file}`;
    return obj
  }, {})
}

module.exports.output = function (outdir) {
	return {
		path: outdir,
		filename: "[name].js",
		libraryTarget: "commonjs"
	}
}

module.exports.config = function (_options) {
	const options = Object.assign({
		srcdir: "./src/",
		outdir: ".webpack",
	}, _options)
  return Object.assign({
  	target: "node",
  	mode: process.env.MODE || "development",
  	entry: entry(options.srcdir, options.files),
  	resolve: {
  		extentions: [ ".js" ],
  	},
  	output: output(options.outdir)
	}, options.override)
}
