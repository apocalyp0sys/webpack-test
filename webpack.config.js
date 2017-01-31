module.exports = {
    context: __dirname,
    entry: "./app/index.js",
    output: {
        path: __dirname + "/dist",
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
};