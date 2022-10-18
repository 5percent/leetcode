/*
Given two integers a and b, return the sum of the two integers without using the operators + and -.

 

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = 2, b = 3
Output: 5
 

Constraints:

-1000 <= a, b <= 1000

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/sum-of-two-integers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

const getSum = function(a, b) {
  // 十进制数转二进制补码
  const getCompCode = (x) => {
    if (x >= 0) {
      let main = x.toString(2);
      return (new Array(32 - main.length).fill(0).join('') + main);
    }
    else {
      return (x >>> 0).toString(2);
    }
  }

  // 二进制补码转十进制
  const toDec = (binArray) => {
    const symbol = binArray[0];

    if (symbol === 0) {
      return parseInt(binArray.join(''), 2);
    } else {
      binArray = binArray.map(x => x === 1 ? 0 : 1);
      return parseInt(bitCal(binArray, [1]).join(''), 2) * -1;
    }
  }

  // 二进制 带进位的位运算
  const bitCal = (aArr, bArr) => {
    let res = [];
    let flag = 0;
    let len = Math.max(aArr.length, bArr.length);

    while(len--) {
      let left = aArr.pop() || 0;
      let right = bArr.pop() || 0;

      res.unshift(left ^ right ^ flag);

      if ((left | right) == 0 || ((left ^ right) == 1 && flag == 0)) {
        flag = 0;
      } else {
        flag = 1;
      }
    }

    return res;
  }

  const aArr = getCompCode(a).split('');
  const bArr = getCompCode(b).split('');
  const resArr = bitCal(aArr, bArr);

  return toDec(resArr);
}

const getSum2 = function(a, b) {
  return b === 0 ? a : getSum2(a ^ b, (a & b) << 1);
}

let res = getSum2(500, 223);
console.log('res', res);