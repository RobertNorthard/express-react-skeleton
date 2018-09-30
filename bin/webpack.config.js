const path = require('path');

module.exports = {
    entry: "./src/App.js",
    output: {
        path: __dirname + "/../target/",
        filename: "bundle.js"
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            include: /(src|test)/,

            loader: 'babel-loader',

            options: {
                presets: ['react']
            }
        }]
    }
}