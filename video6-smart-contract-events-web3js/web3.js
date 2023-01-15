require('dotenv').config();
const { alchemyUrl, contractAddress } = process.env;
const Web3 = require('web3');
const web3 = new Web3(alchemyUrl);
const abi = require('./abi.json');

const contract = new web3.eth.Contract(abi, contractAddress);

contract.getPastEvents(
    'AllEvents',
    {
        fromBlock: 8300000,
        to: 'latest'
    },
    (err, events) => { console.log(events.length) }
)

// contract.getPastEvents(
//     'AllEvents',
//     {
//         fromBlock: 8300000,
//         to: 'latest'
//     },
//     (err, events) => { console.log(events[277]) }
// )

// contract.getPastEvents(
//     'Transfer',
//     {
//         fromBlock: 8300000,
//         to: 'latest'
//     },
//     (err, events) => { console.log(events[277]) }
// )

// contract.getPastEvents(
//     'Approval',
//     {
//         fromBlock: 8300000,
//         to: 'latest'
//     },
//     (err, events) => { console.log(events[277]) }
// )