// actual counting sort data structure.
function countingSort(arr) {
    let sortedArray = [];
    let maxNum = 0;
    for (const element of arr) {
        if (element > maxNum) {
            maxNum = element;
        }
    }
    let countArray = new Array(maxNum + 1);

    for (let i = 0; i < arr.length; i++) {
        if (!countArray[arr[i]]) {
            countArray[arr[i]] = 0;
        }
        countArray[arr[i]]++;
    }

    for (let i = 0; i < countArray.length; i++) {
        while (countArray[i]) {
            sortedArray.push(countArray.indexOf(countArray[i]));
            countArray[i]--;
        }
    }
    return sortedArray;
}

// hackerrank solution
function counting(arr) {
    let maxNum = 0;
    for (const element of arr) {
        if (element > maxNum) {
            maxNum = element;
        }
    }
    let countArray = new Array(maxNum + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        countArray[arr[i]]++;
    }

    return countArray;
}

// initialising the array.
let arr = [3, 2, 1, 4, 2, 1, 1];
// invoking the functions.

// console.log(countingSort(arr));
console.log(counting(arr));
