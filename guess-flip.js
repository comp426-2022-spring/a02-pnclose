// Import minimist
import minimist from "minimist";

// Import Coin Object
import {flipACoin} from "./modules/coin.mjs";

// Get input via minimist
var parameterInput = minimist(process.argv.slice(2));

// Get substring
// - - n u m b e r = 1  0 null
// 0 1 2 3 4 5 6 7 8 9 10 11
var call = parameterInput['call']

// If nothing show error
if(call != 'heads' && call != 'tails') {
    console.log('Error: no input.')
    console.log('Usage: node guess-flip --call=[heads|tails]');
} else {
    console.log(flipACoin(call))
}


