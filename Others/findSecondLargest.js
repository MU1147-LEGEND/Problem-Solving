const myArr = [4, 2, 5, 1, 11, 10];

function findSecondLargest(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr[arr.length- 2];
}

console.log(findSecondLargest(myArr));
