function quickSort(arr) {

    if (arr.length < 2) {
        return arr;
    }

    let i = 0;
    let j = arr.length - 1;
    let key = arr[0];

    let swap = (a, b) => {
        let tmp = a;
        a = b;
        b = tmp;
    }

    while (i !== j) {
        while(j--) {
            console.log(j);
            if (arr[j] < key) {
                swap(arr[i], arr[j]);
                break;
            }
        }
        while(i++) {
            if (arr[i] > key) {
                swap(arr[i], arr[j]);
                break;
            }
        }
    }

    console.log(arr);
}

let arr = [6,5,3,1,2,7,9];
quickSort(arr);