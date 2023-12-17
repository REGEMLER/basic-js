const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let arr = [];
  for (let i = 0; i < (options.additionRepeatTimes ? options.additionRepeatTimes: 1) ; i++) {
    if (options.addition !== undefined ) arr.push(`${options.addition}`);
  }

  let addition = arr.join(options.additionSeparator ? options.additionSeparator : '|')

  let result = [];

  for (let i = 0; i < (options.repeatTimes ? options.repeatTimes : 1); i++) {
    result.push(str + addition);
  }

  return result.join(options.separator ? options.separator : '+');
}

module.exports = {
  repeater
};
