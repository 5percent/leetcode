/**
 * @file 基于原数组的快排
 */

Array.prototype.swap = function(i, j) {
  let tmp = this[i];
  this[i] = this[j];
  this[j] = tmp;
};

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let i = 0;
  let j = arr.length;
  let key = arr[0];
  let dir = 0;

  while(i != j) {
    if (!dir) {
      while(i < --j) {
        if (arr[j] < key) {
          arr.swap(i, j);
          dir = 1;
          break;
        }
      }
    } else {
      while(++i < j) {
        if (arr[i] > key) {
          arr.swap(i, j);
          dir = 0;
          break;
        }
      }
    }
  }

  let leftArr = arr.slice(0, i);
  let rightArr = arr.slice(i + 1);
  if (leftArr.length > 1) {
    leftArr = quickSort(leftArr);
  }
  if (rightArr.length > 1) {
    rightArr = quickSort(rightArr);
  }

  return [...leftArr, arr[i], ...rightArr];
}

let arr = [6,5,3,1,8,4007,2,57,7,9,10];
let res = quickSort(arr);
console.log(res);