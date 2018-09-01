//初始化过程
var Web3 = require('web3');
var BigNumber = require('bignumber.js');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
//省略初始化过程
var version = web3.version.api;
console.log(version);

var accounts = web3.eth.accounts;
console.log(accounts);

version = web3.version.node;
console.log(version);

version = web3.version.network;
console.log(version);

var connected = web3.isConnected();
if(!connected){
  console.log("node not connected!");
}else{
  console.log("node connected");
}

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var hash = web3.sha3("Some string to be hashed");
console.log(hash); 
var hashOfHash = web3.sha3(hash, {encoding: 'hex'});
console.log(hashOfHash); 


var str = web3.toAscii("0x657468657265756d000000000000000000000000000000000000000000000000");
console.log(str); 

var str = "abcABC";
var obj = {abc: 'ABC'};
var bignumber = new BigNumber('12345678901234567890');

console.log(bignumber);

var hstr = web3.toHex(str);
var hobj = web3.toHex(obj);
// var hbg = web3.toHex(bignumber);

console.log("Hex of Sring:" + hstr);
console.log("Hex of Object:" + hobj);
// console.log("Hex of BigNumber:" + hbg);

var value = web3.fromWei('21000000000000', 'finney');
console.log(value); 

var value = web3.toBigNumber('200000000000000000000001');
console.log(value); // instanceOf BigNumber
console.log(value.toNumber()); // 2.0000000000000002e+23
console.log(value.toString(10)); 

var listening = web3.net.listening;
console.log("client listening: " + listening);

var peerCount = web3.net.peerCount;
console.log("Peer count: " + peerCount); 

var eth = web3.eth;

console.log("Current default: " + web3.eth.defaultAccount);
web3.eth.defaultAccount = '0x8888f1f195afa192cfee860698584c030f4c9db1';
console.log("Current default: " + web3.eth.defaultAccount);

console.log("defaultBlock: " + web3.eth.defaultBlock);
web3.eth.defaultBlock = 231;
console.log("defaultBlock: " + web3.eth.defaultBlock);

var sync = web3.eth.syncing;
console.log(sync);

var coinbase = web3.eth.coinbase;
console.log(coinbase); 

var mining = web3.eth.mining;
console.log(mining);

var hashrate = web3.eth.hashrate;
console.log(hashrate);

var gasPrice = web3.eth.gasPrice;
console.log(gasPrice.toString(10));

var accounts = web3.eth.accounts;
console.log(accounts); 

var number = web3.eth.blockNumber;
console.log(number);

var info = web3.eth.getBlock(0);
console.log(info);

var Tx = require('ethereumjs-tx');
var privateKey = new Buffer('e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109', 'hex')

var rawTx = {
  nonce: '0x00',
  gasPrice: '0x09184e72a000', 
  gasLimit: '0x2710',
  to: '0x0000000000000000000000000000000000000000', 
  value: '0x00', 
  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
}

var tx = new Tx(rawTx);
tx.sign(privateKey);

var serializedTx = tx.serialize();

//console.log(serializedTx.toString('hex'));
//0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f

web3.eth.sendRawTransaction(serializedTx.toString('hex'), function(err, hash) {
  if (!err)
    console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
});

