// Import minimist 
import minimist from "minimist";

// Import Coin Object to access coin.mjs functions
import * as Coin from "./modules/coin.mjs";

// Use minimist to get input
var parameterInput = (process.argv.slice(2));

// Find substring
// - - n u m b e r = 1  0 null
// 0 1 2 3 4 5 6 7 8 9 10 11
var num = String(parameterInput).substring(9, 11); // substring is exclusive 
let arr = []
if(num.length == 0) num++

// Populate array
for(var i = 0; i<num; i++) {
    arr[i] = Coin.coinFlip()
}

// Log to console
console.log(arr)
console.log(Coin.countFlips(arr))


