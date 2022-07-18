import { Identity } from "@semaphore-protocol/identity"
import { createMerkleTree, createMerkleProof, generateProof, verifyProof, FullProof } from "@semaphore-protocol/proof"
import * as fs from 'fs'
var circomlibjs = require('circomlibjs')

// import * as fs from 'fs';


// const buffer = fs.readFileSync('random.txt','utf8');
// var message = buffer.toString();

const identity1 = new Identity()
const identity2 = new Identity()
const identity3 = new Identity()
const identity4 = new Identity()

console.log("Nullifier",identity2.getNullifier())
console.log("Trapdoor",identity2.getTrapdoor())

const commitment1 = identity1.generateCommitment()
const commitment2 = identity2.generateCommitment()
const commitment3 = identity3.generateCommitment()
const commitment4 = identity4.generateCommitment()

console.log(commitment2,"Is it the same?",circomlibjs.poseidon([circomlibjs.poseidon([identity2.getNullifier(),identity2.getTrapdoor()])]))

var leaves = [commitment1,commitment2,commitment3,commitment4]
// console.log(leaves)

const depth = 2
const zeroValue = BigInt(0)

const merkleTree = createMerkleTree(depth, zeroValue, leaves)
console.log("Merkle Tree", merkleTree)
const leaf = identity2.generateCommitment()
const merkleProof = createMerkleProof(depth, zeroValue, leaves, leaf)
console.log("Merkle Proof", merkleProof)

const externalNullifier = BigInt(1)
const signal = "Hello world"





// console.log(identity1.getTrapdoor())
// console.log(identity1.getNullifier())
// console.log(commitment,"Is it the same?",circomlibjs.poseidon([circomlibjs.poseidon([identity1.getNullifier(),identity1.getTrapdoor()])]))