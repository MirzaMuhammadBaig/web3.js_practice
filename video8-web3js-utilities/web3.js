require('dotenv').config();
const underscore = require('underscore');
// console.log(underscore);
const { alchemy_url } = process.env;
const Web3 = require('web3');
const web3 = new Web3(alchemy_url);
const _ = web3.utils.underscore;

// console.log(_);
// _.each({ key1: value1, key2: value2 }, (value, key) => {
//     console.log(key);
// });

// web3.eth.getGasPrice().then((result) => {   // get gas price
//     console.log(web3.utils.fromWei(result, 'ether')); // get gas price in eth
// });

// console.log(web3.utils.sha3('Mirza')); // return hex value in sha3 standard

// console.log(web3.utils.keccak256('Muhammad')); // return hex value in keccak standard

// console.log(web3.utils.soliditySha3('Baig')); // return hex value in sha3 standard

// console.log(web3.utils.randomHex(32)); // return hex value according to number

