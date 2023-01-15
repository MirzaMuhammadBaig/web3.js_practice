require('dotenv').config();
const { alchemy_url } = process.env;
const Web3 = require('web3');
const web3 = new Web3(alchemy_url);

// web3.eth.getBlockNumber().then(console.log);

// web3.eth.getBlock('latest').then(console.log);

// web3.eth.getBlock('latest').then((block) => { // you can put number or transaction hash intead of latest
//     console.log(
//         {
//             blockHash: block.hash,
//             blockNumber: block.number
//         }
//     )
// });

// web3.eth.getBlockNumber().then((latest) => {
//     for (let i = 0; i < 10; i++) {
//         web3.eth.getBlock(latest - i).then(console.log)
//     }
// });

// web3.eth.getBlockNumber().then((latest) => {
//     for (let i = 0; i < 10; i++) {
//         web3.eth.getBlock(latest - i).then((block) => {
//             console.log(`Block Number: ${block.number}, Block hash: ${block.hash}`)
//         })
//     }
// });

// web3.eth.getBlockTransactionCount('latest').then(console.log) // return number of transaction in block
const blockHash = '0x18c5f126ac8d533cc0501589e530796f7dda921329992f5be00b466ab2d4d284';
web3.eth.getTransactionFromBlock(blockHash, 2).then(console.log)