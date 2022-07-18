var alpha = require('circomlibjs');
var hash1 = alpha.poseidon([
  1,
  2
  ])

var hash2 = alpha.poseidon([3,4])
console.log(hash1,hash2)
var root = alpha.poseidon([hash1,hash2])
console.log(root)