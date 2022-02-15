// Import minimist 
import minimist from "minimist";

// Import Coin Object to access coin.mjs functions
import { countFlips, coinFlips } from "./modules/coin.mjs";

// Use minimist to get input
var parameterInput = minimist(process.argv.slice(2));
parameterInput['number']


// Find substring
// - - n u m b e r = 1  0 null
// 0 1 2 3 4 5 6 7 8 9 10 11
var num = parameterInput.number || 1

let arr = coinFlips(num)


// Log to console
console.log(arr)
console.log(countFlips(arr))


