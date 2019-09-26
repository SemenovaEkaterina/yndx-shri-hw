const path = require('path');
const config = require('../config');
const {
    getHash,
    getDirectoryName,
    callGit,
    checkExisting,
    rmDir
} = require('../utils');
const execFile = require("util").promisify(require("child_process").execFile);
const {asyncErrorHandler} = require('../handlers');
const status = require('../status');

const {body} = config;

module.exports = asyncErrorHandler(async (req, res) => {
    const {
        [body.url]: url,
    } = req.body;

    const repoName = url.replace(config.githubUrl, '').split('/')[1];
    const repoPath = path.join(rootDirPath, getDirectoryName(repoName));

    if (await checkExisting(repoPath)) {
        return res.sendStatus(status.conflict);
    }

    try {
        await callGit(execFile, ['clone', '--quiet', '--bare', url], rootDirPath);
    }
    catch (e) {
        if (e.code === status.notFound) {
            return res.sendStatus(status.notFound);
        }
        throw e;
    }

    await rmDir(execFile, 'hooks', repoPath);

    return res.sendStatus(status.ok);
});