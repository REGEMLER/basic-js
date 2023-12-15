const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let result = {};
  domains.forEach(item => {
    let arr = [];
    let str = '';
    const last = item.split('.').length - 1;
    for (let i = last; i >= 0; i--) {
      str += `.${item.split('.')[i]}`;
      arr.push(item.split('.')[i]);
      let count = 0;
      domains.forEach(j => {
        if (j.includes([...arr].reverse().join('.'))) {
          count = count + 1;
        }
      })
      result[str] = count;
    }
  })
  return result;
}

module.exports = {
  getDNSStats
};
