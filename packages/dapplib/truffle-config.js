require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remember coconut install crew fringe gauge'; 
let testAccounts = [
"0xb02cd1b77883431cd95d016adbe416fe9dcd78a7fc3e8aaf3d8e5cdf42a15634",
"0x1a33804eb5315a28c8748c50e2666f17ae474ee89144e68d16d83b07c36bee47",
"0x0e265e8728044f18bfb48063bf6cf5a3b85aaba537be175274210456b4474bbe",
"0xbdd0981e21ec490474f40b40af67989e95f99a7938ab792a065e4c6300bb383d",
"0x7fd978f5d570d0255a46e6bf3435d38206bd7f3fd5cc452089ef65677734960f",
"0x5bd9c41501d1c84cf90dabea15dbd1f29310d1a86865d54b879c86d5cb11eafe",
"0x0d083465be43eff9d9053d8e6b0ece9f3bb7060e136d5e00b48f9dc12a3dd4a8",
"0x731bcd0aa1e9c665bb726488689fda361332e5d5ce852f162e617a4077635897",
"0xc5885a85dd73c602326b7275c69bf8fcca621c3f6a2795b6771a14b3b67e2c46",
"0xfc9c1bb6a293531286bbc02f9e9d9d22fa3ae7c8590a95e6ea9ae5284faa98c0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

