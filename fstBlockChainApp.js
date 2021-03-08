//const SHA256 = require('crypto-ja');
//import sha256 from 'crypto-js/sha256';
import sha256 from 'crypto-js/sha256';
//var sha256 = require("crypto-js/sha256");
//var CryptoJS = require("crypto-js");

class Block {
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    calculateHash(){
        return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class BlockChain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0,'01/03/2021','Genesis Block','0');
    }

    getLatestBlock(){
        return this.chain(this.chain.length - 1)
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = this.newBlock.calculateHash();
        this.chain.push(newBlock)
    }
}

let juanBlockChain = new BlockChain();
juanBlockChain.addBlock(new Block(1,'04/03/2021',{monto:50}))
juanBlockChain.addBlock(new Block(1,'04/03/2021',{monto:60}))
juanBlockChain.addBlock(new Block(1,'04/03/2021',{monto:5}))

console.log(JSON.stringify(juanBlockChain, null,4))