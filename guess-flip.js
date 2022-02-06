// Import minimist
import minimist from "minimist";

// Import Coin Object
import * as Coin from "./modules/coin.mjs";

// Get input via minimist
var parameterInput = (process.argv.slice(2));

// Get substring
// - - n u m b e r = 1  0 null
// 0 1 2 3 4 5 6 7 8 9 10 11
var call = String(parameterInput)

// If nothing show error
if(call.length == 0) {
    console.log('Error: no input.')
} else {

    // Get substring
    var name = call.substring(7, 12); 

    // If name is not either heads or tails show error
    if(name != 'heads' && name != 'tails') console.log('Error: no input.')

    // Log result
    console.log(Coin.flipACoin(name))
}
