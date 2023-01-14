// Open CMD, then run "node", then install "web3" then run "var Web3 = require(web3)".

// Then run "Web3" after this copy mainnet url of ethereum from infura and run "var url = "url".
// Then run "var web3 = new Web3(url)".
// Then run "web3"

// Then copy the address of polygon and run " var contractAddress = 'address'.

// Then copy the abi of polygon contract and run "var abi = 'abi'.

// Then run "var contract = new web3.eth.Contract(abi, contractAddress).

// Then for check methods run "contract.methods".

// Then from methods I choose balanceOf and for that I run "await contract.methods.balanceOf(accountAddress).call((error, result) => {console.log(result)})" // we can run on every method //

require('dotenv').config();
const { alchemy_url, contractAddressPolygon } = process.env;
const Web3 = require('web3');
const web3 = new Web3(alchemy_url);
const abi = require('./abi.json');

const contract = new web3.eth.Contract(abi, contractAddressPolygon);
async function balance() {
    const checkBalance = await contract.methods.balanceOf(contractAddressPolygon).call((error, result) => { console.log(`Balance of polygon contract is ${result}`) });
}

balance();
