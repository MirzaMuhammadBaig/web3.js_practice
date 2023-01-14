//1_deploy.js
const data = artifacts.require('data');

module.exports = async function (deployer) {
    await deployer.deploy(data);
};