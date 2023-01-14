const Video4Token = artifacts.require('Video4Token');

module.exports = async function (deployer) {
    await deployer.deploy(Video4Token);
};