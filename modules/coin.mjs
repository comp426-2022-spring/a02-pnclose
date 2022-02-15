/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  return Math.random() < 0.5 ? ('heads') : ('tails')
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  let arr = []
  for(var i = 0; i<flips; i++) {
    arr[i] = coinFlip()
  }
  return arr
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(flips) {
  let hCnt = 0
  let tCnt = 0
  for(let i=0; i<flips.length; i++) {
    if (flips[i] == 'heads') hCnt++
    if (flips[i] == 'tails') tCnt++
  }

  if(hCnt == 0) return {tails: tails}
  if(tCnt == 0) return {heads: heads}
  return { heads: heads, tails: tails }
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  let res = coinFlip()
  var ans;
  if(call == res) {
    ans = 'win'
  } else {
    ans = 'lose'
  }
  return { call: call, flip: res, result: ans }
}


/** Export 
 * 
 * Export all of your named functions
*/

export { coinFlip, countFlips, flipACoin, coinFlips }
