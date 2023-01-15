require('dotenv').config();
const { alchemy_url } = process.env;
const Web3 = require('web3');
const web3 = new Web3(alchemy_url);

// const accountCreation = web3.eth.accounts.create();
// console.log(`Account Creation:`, accountCreation);

// const accountEncrypt = web3.eth.accounts.encrypt(accountCreation.privateKey, 'muhammad');
// console.log(`Account Encrypt:`, accountEncrypt);

// const accountDecrypt = web3.eth.accounts.decrypt(accountEncrypt, 'muhammad');
// console.log(`Account Decrypt:`, accountDecrypt);

// const walletCreation = web3.eth.accounts.wallet.create(2);
// console.log('walletCreation', walletCreation);

// const walletEncrypt = web3.eth.accounts.wallet.encrypt('muhammad');
// console.log('Wallet Encrypt:', walletEncrypt);

// const walletDecrypt = web3.eth.accounts.wallet.decrypt(walletEncrypt, 'muhammad');
// console.log("Wallet Decrypt:", walletDecrypt);

