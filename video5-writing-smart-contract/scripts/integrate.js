require('dotenv').config();
const { PRIVATE_KEY, PROJECT_ID, contractAddress } = process.env;
const Web3 = require('web3');
const accountAddress = '0xc9cf24A1145233d8607a6c996373c05dBC2397D4';
const contractAbi = require('../build/contracts/data.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider(PRIVATE_KEY, PROJECT_ID);
const web3 = new Web3(provider);

async function setData() {

    const data = {
        name: 'Muhammad',
        age: 18,
        cnic: 4240166237115,
        nationality: 'Pakistani'
    };

    const contract = await web3.eth.Contract(
        contractAbi.abi,
        contractAddress,
        provider
    );

    const set_data = await contract.methods.setData(data.name, data.age, data.cnic, data.nationality).send({ from: accountAddress });
    console.log(`You have successfully add data`);
};

setData();