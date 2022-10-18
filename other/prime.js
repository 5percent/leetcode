/**
 * 获取n以内的质数
 * 
 * @param {Number} n 边界 
 * @returns {Array} 从0-n的质数集合
 */
function getPrime(n) {
    if (n <= 1) {
        return [];
    }

    let arr = [2];

    for (let i = 3; i <= n; i+=2) {
        let isPrime = !arr.some(dec => i % dec === 0);
        isPrime && arr.push(i);
    }

    return arr;
}

/**
 * 判断是否为质数
 * 
 * @param {Number} n
 * @return {boolean}
 */
function isPrime(n) {

  if (n < 2) {
    return false;
  }

  if (n < 4) {
    return true;
  }

  let center = Math.ceil(Math.sqrt(n));
  let primeArr = getPrime(center);

  return !primeArr.some(dec => n % dec === 0);
}

/**
 * 找出最大的质数约数
 * 
 * @param {Number} product 
 * @returns 
 */
function getPrimeProduct(product) {
    let center = Math.ceil(Math.sqrt(product));
    let primeArr = getPrime(center);

    for (let i = primeArr.length - 1; i >= 0; i--) {
        if(product % primeArr[i] === 0) {
            return `${primeArr[i]} & ${product / primeArr[i]}`;
        }
    }

    return 'none';
}


// let product = 707829217;
// let product = 42;

let t1 = new Date().getTime();
let res = getPrimeProduct(product);
// let res = isPrime(707829217);
let t2 = new Date().getTime();

console.log(`input: ${product}
output: ${res}
cost: ${t2 - t1}ms`);
