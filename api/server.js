const express = require('express');
const os = require('os');
const path = require('path');
const config = require('./config');
const {checkExisting} = require('./utils');

const [, , inputPath] = process.argv;

if (!inputPath) {
    console.log(`Empty basedir`);
    return;
}

const {baseUrl} = config;

const rootDirPath = path.resolve(
     inputPath.startsWith('~')
        ? `${os.homedir()}${inputPath.slice(1)}`
        : inputPath
);

global.rootDirPath = rootDirPath;

const initServer = () => {
    const app = express();
    app.use(express.urlencoded({extended: true}));
    app.use(baseUrl, require('./routes'));

    app.listen(config.port);

    console.log(`Server listen on localhost:${config.port}`);
};

(async function () {
    const isPathExisted = await checkExisting(rootDirPath);
    if (isPathExisted) {
        initServer();
    }
}());
