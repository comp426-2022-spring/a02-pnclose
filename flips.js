import minimist from "minimist";
import * as Coin from "./modules/coin.mjs";
var parameterInput = (process.argv.slice(2));

// - - n u m b e r = 1  0 null
// 0 1 2 3 4 5 6 7 8 9 10 11
var num = String(parameterInput).substring(9, 11); // substring is exclusive 
let arr = []
if(num.length == 0) num++
for(var i = 0; i<num; i++) {
    arr[i] = Coin.coinFlip()
}
console.log(arr)
console.log(Coin.countFlips(arr))


