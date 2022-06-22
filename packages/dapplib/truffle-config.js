require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift release place mistake install person equal genre'; 
let testAccounts = [
"0x6e8718fe626d0bfd634f4342d2877fc0069414a7f1a21815cfd92c2c0da96cfb",
"0xc87bf10f6754b90c5148283e21112fa671671cd9854fd19c801692f19cb0d570",
"0xbe8b0cf172c952d545ab0f5631079cd63a12f7cc5b9829eace6025e3e0d0f63b",
"0x5d9c0f5064eead6a907022f2fab6162344e5a212f943b59087b4c3b0968ce316",
"0x1acaf8c103211e7798e65490ec5146a83b4422a8fbe3d229e4fcf13724e11868",
"0x02e2e8ea105c35a88b75d10720f00cfa5df0ad6ba10f59ed306c0ad724df384b",
"0xb2e6e95e840650f045b91508b396df3222cefd369f96dbc9865cb6dfd939a9f2",
"0x2c02020e3aae6b35ba03747bce4cd81d1782074dea1490c17aff77baea1d60c8",
"0xf257bec34115a64175d4b621a57afaa82811eae8820a0b352ae9b63a0ab8da7b",
"0x3c33103ebc174d94e581bd79e1e7ca9317598676c5f7809141c07f231eadb6a0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


