/**
 * 字节，给定数组，以小到大取k个元素，并不改变原始顺序
 * @param {Array} arr 
 * @param {number} k 
 * @returns 
 */

function f(arr, k) {
  let tmp = new Array();
  arr.forEach((ele, ind) => {
      let o = {ele, ind};
      tmp.push(o);
  });

  return tmp.sort((a, b) => a.ele - b.ele).slice(0, k).sort((a, b) => a.ind - b.ind).map(x => x.ele);
}

f([1,2,3,5,6,3,2], 3)
