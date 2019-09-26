const path = require('path');
const config = require('../config');
const {getHash, getDirectoryName, removePrefix, callGit, cleanRelativePath} = require('../utils');
const execFile = require("util").promisify(require("child_process").execFile);
const {asyncErrorHandler, repoNotFoundHandler} = require('../handlers');
const status = require('../status');

const {params} = config;

module.exports = repoNotFoundHandler(asyncErrorHandler(async (req, res) => {
    const {
        [params.repositoryId]: repo,
        [params.commitHash]: commit,
        [params.path]: currentPath,
    } = req.params;

    let inputRelativePath = (currentPath + req.params['0']) || '';
    const relativePath = cleanRelativePath(inputRelativePath);
    if (inputRelativePath && !relativePath) {
        return res.sendStatus(status.notFound);
    }

    const hasPath = !!relativePath;

    const repoPath = path.join(rootDirPath, getDirectoryName(repo));
    const hash = await getHash(repoPath, commit || 'master');
    if (!hash) {
        return res.sendStatus(status.notFound);
    }

    const commandParams = ['ls-tree', '--name-only', '-r', hash];
    if (hasPath) {
        commandParams.push(relativePath);
    }
    const dir = await callGit(execFile, commandParams, repoPath);
    if (relativePath && !dir.length) {
        return res.sendStatus(status.notFound);
    }

    return res.json({
        dir: [...new Set(
            dir.map(item => removePrefix(item, relativePath).split('/')[0])
        )]
    });
}));