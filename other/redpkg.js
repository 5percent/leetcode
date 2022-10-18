/**
 * 字节，随机红包, 控制分布
 * 
 * @param {*} totalAmount 
 * @param {*} size 
 * @returns 
 */
function getRedEnvelopeAmountList(totalAmount, size) {
  const total = Math.round(totalAmount * 100);

  if (!size || !totalAmount || size * 1 >= total) {
      return false;
  }


  let makeRandom = (top) => {
      let arr = [...new Array(10).fill(0.01), ...new Array(80).fill(0.1), ...new Array(10).fill(1)];
      let randomKey = Math.round(Math.random() * 100)
      let k = arr[randomKey];
      return Math.round(Math.random() * top) * k + 1;
  }

  let list = [];
  let rest = total;
  let i = size - 1;
  while(i--) {
      let pkg = makeRandom(rest - 1);
      rest = rest - pkg;
      list.push(pkg);
  }
  list.push(rest);

  return list.map(x => (x/100).toFixed(2));
}

console.log(getRedEnvelopeAmountList(100, 3));