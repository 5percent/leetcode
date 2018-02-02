/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {

    let len = s.length;
    let arr = s.split('');

    // Array.reverse();
    let res = [];
    for (let i=0;i<Math.ceil(len/2);i++) {
        res[i] = s[len-i];
        res[len-i] = s[i];
    }

    return res.join('');
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let set = {};
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        set[c] = set[c] === undefined ? i : false;
    }

    for (let j in set) {
        if (set[j] !== false) {
            return set[j];
        }
    }
    return -1;
    
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    let sArr = Array(26).fill(0);
    let tArr = Array(26).fill(0);
    let code = 'a'.charCodeAt(0);

    for (let i = 0, len = s.length; i < len; i++) {
        let sInd = s[i].charCodeAt(0) - code;
        sArr[sInd]++;
        let tInd = t[i].charCodeAt(0) - code;
        tArr[tInd]++;
    }

    return sArr.join('') == tArr.join('');
    
    
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n == 1) {
        return '1';
    }

    let s = countAndSay(n - 1);
    let ns = '';
    let count = 0;
    let tmp = s[0];

    for (let i = 0, len = s.length; i <= len; i++) {
        if (i != len && s[i] == tmp) {
            count++;
        }
        else {
            ns += count + tmp;
            count = 1;
            tmp = s[i];
        }
    }
    
    return ns;
};


let s = 1;
console.log(countAndSay(8));