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
// var a = [1,1,2];
// removeDuplicates(a);
var arr = [-3, 4, 3, 90];
var bb = twoSum(arr, 0);
console.log(bb);