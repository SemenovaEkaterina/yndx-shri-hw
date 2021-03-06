const checkExisting = require('./checkExisting');
const getHash = require('./getHash');
const getDirectoryName = require('./getDirectoryName');
const getRepoNameFromPath = require('./getRepoNameFromPath');
const removePrefix = require('./removePrefix');
const callGit = require('./callGit');
const rmDir = require('./rmDir');
const cleanRelativePath = require('./cleanRelativePath');

module.exports = {
    checkExisting,
    getHash,
    getDirectoryName,
    getRepoNameFromPath,
    removePrefix,
    callGit,
    rmDir,
    cleanRelativePath,
};
