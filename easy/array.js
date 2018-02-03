/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    var k = 0;
    for (let i = 0; i < nums.length; i ++) {
        if (i == 0 || nums[i] > nums[i-1]) {
            nums[k] = nums[i];
            k++;
        }
        else {
            continue;
        }
    }
    nums.splice(k);

    return nums;
    
};


var rotate = function (nums, k) {
    let len = nums.length;
    if (len < k) {
        k = k - len;
    }
    let i = 0;
    while(i < len - k) {
        nums.push(nums[i]);
        i++;
    }
    nums.splice(0, len-k);
    
}

var twoSum = function (nums, target) {
    nums = nums.sort((a,b)=>{return a-b;});
    let i = 0;
    let j = nums.length - 1;
    while (nums[i] + nums[j] != target) {
        if (nums[i] + nums[j] > target) {
            j--;
        }
        else if (nums[i] + nums[j] < target) {
            i++;
        }
    }
    return [i, j];
}

var twoSum = function(nums, target) {
    let hash = {};
    let i = nums.length;

    while (i--) {
        let val = nums[i];
        if (hash[target - val]) {
            
            return [i, hash[target - val]];
        }
        hash[val] = i;
    }


};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let p = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[p++] = nums[i];
        }
    }
    for (let i = p; i < nums.length; i++) {
        nums[i] = 0;
    }
};