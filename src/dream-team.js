const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  if (!Array.isArray(members) || members.length == 0) {
    return false;
  } 
  let str = members.reduce((acc, item) => {
    if(typeof item === "string") {
      acc += item.trim().toUpperCase().slice(0, 1);
    }
    return acc;
  }, "");
  let arr = str.split("");
  let arrSorted = arr.sort();
  let result = arrSorted.join("");
  return result;
}

module.exports = {
  createDreamTeam
};
