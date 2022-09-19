/**
 * @file 小数转分数
 */


/**
 * 
 * @param {number} d decimal 
 * @return {string} fraction
 */
function d2f(d) {
  const str = `${d}`;

  const arr = str.split('.');
  const int = arr[0];
  const dec = arr[1];

  let numerator = parseInt(dec, 10);
  let denominator = Math.pow(10, dec.length);

  while (numerator % 2 === 0 && denominator % 2 === 0) {
    numerator = numerator / 2;
    denominator = denominator / 2;
  }

  while (numerator % 5 === 0 && denominator % 5 === 0) {
    numerator = numerator / 5;
    denominator = denominator / 5;
  }


  return `${int} and ${numerator} / ${denominator}`;
}

console.log(d2f(7.625))