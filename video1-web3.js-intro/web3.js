// Open CMD, then run "node", then install "web3" then run "var Web3 = require(web3)".

// Then run "Web3" after this copy mainnet url of ethereum from infura and run "var url = "url".
// Then run "var web3 = new Web3(url)".
// Then run "web3"

// Then copy an public address of ethereum BL and run "var address = "address".

// *This command is for converting balance in eth : "web3.utils.fromWei(balance, 'ether')".

// After this run "await web3.eth.getBalance('address', (error, wei) => { balance = web3.utils.fromWei(wei, 'ether')})  // for get balance //

// *Connect from ganache: "var web3 = new Web3('ganache url')".

// *For make account through web3.js: = " web3.eth.accounts.create()".

require('dotenv').config();
const Web3 = require('web3');
const alchemy_url = process.env.alchemy_url;
const web3 = new Web3(alchemy_url);
const randomAddress = '0x8dc847af872947ac18d5d63fa646eb65d4d99560';

const createAccount = web3.eth.accounts.create();
console.log(createAccount);

async function getBalance() {

    const getBalanceOfRandomAddress = await web3.eth.getBalance(randomAddress);
    const getBalanceOfNewAccount = await web3.eth.getBalance(createAccount.address);
    console.log(`Balance of randomAddress: ${randomAddress} is ${getBalanceOfRandomAddress} & balance of createAccount address: ${createAccount.address} is ${getBalanceOfNewAccount}`);
}

getBalance()

