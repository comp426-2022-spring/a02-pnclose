// Import coin.mjs functions
import { countFlips, coinFlips } from "./modules/coin.mjs";

// Import minimist 
import minimist from "minimist";



// Use minimist to get input
const args = minimist(process.argv.slice(2));
args['number']


// Find num
const num = args.number || 1

const arr = coinFlips(num)


// Log to console
console.log(arr)
console.log(countFlips(arr))


