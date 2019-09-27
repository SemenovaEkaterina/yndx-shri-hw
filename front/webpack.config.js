const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "views/index.js"),
    output: {
        path: path.resolve(__dirname, "static"),
        filename: "script.js"
    },
    resolve: {
        alias: {
            'shared': path.join(__dirname, './shared'),
        }
    },
};