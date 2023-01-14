require('dotenv').config();
const { alchemy_url, PRIVATE_KEY_account_1, PRIVATE_KEY_account_2 } = process.env;
const Web3 = require('web3');
const web3 = new Web3(alchemy_url);

const account1 = '0xb189d95c7CbAA430Cd835c1191A5CF60E008A1b1';
const account2 = '0xc9cf24A1145233d8607a6c996373c05dBC2397D4';

async function sendEth() {
    const nonce = await web3.eth.getTransactionCount(account2, 'latest');

    const tx = {
        from: account2,
        to: account1,
        nonce: nonce,
        value: 100,//web3.utils.toWei('1', 'ether'),
        gas: 30000,
        data: '0xabcd'
    }

    const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY_account_2);

    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function (error, result) {
        if (error) { console.log(error) }
        else { console.log(`hash: ${result}`) }
    });
};

sendEth();

