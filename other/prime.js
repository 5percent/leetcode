function getPrime(n) {
    if (n <= 1) {
        return [];
    }

    let arr = [2];

    for (let i = 3; i <= n; i+=2) {
        let isPrime = true;
        arr.forEach(dec => {
            if (i % dec === 0) {
                isPrime = false;
                return false;
            }
        });

        isPrime && arr.push(i);
    }

    return arr;
}

function getPrimeProduct(product) {
    let center = Math.ceil(Math.sqrt(product));
    let primeArr = getPrime(center);

    for (let i = 0; i < primeArr.length; i++) {
        if(product % primeArr[i] === 0) {
            return `${primeArr[i]} & ${product / primeArr[i]}`;
        }
    }

    return 'none';
}

let product = 707829217;

let t1 = new Date().getTime();
let res = getPrimeProduct(product);
let t2 = new Date().getTime();

console.log(`input: ${product}
output: ${res}
cost: ${t2 - t1}ms`);
