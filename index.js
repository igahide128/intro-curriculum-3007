'use strict';
/**
 * 17 で割り切れるかどうかを返す関数
 * @param {number} num
 * @return {boolean} 17で割り切れるかどうか
*/
function isMultipleOfSeventeen(num) {
  return num % 17 === 0 ;
}

module.exports = {
  isMultipleOfSeventeen
}
