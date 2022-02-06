import minimist from "minimist";
import * as Coin from "./modules/coin.mjs";
var parameterInput = (process.argv.slice(2));

// - - n u m b e r = 1  0 null
// 0 1 2 3 4 5 6 7 8 9 10 11
var call = String(parameterInput)
if(call.length == 0) {
    console.log('Error: no input.')
} else {
    var name = call.substring(7, 12); // substring is exclusive 
    if(name != 'heads' && name != 'tails') console.log('Error: no input.')
    console.log(Coin.flipACoin(name))
}
