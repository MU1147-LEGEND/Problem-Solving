let arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let result = arr.reduce((a, b) => a + b);

    console.log(`Min is = ${result - max}`);
    console.log(`Max is = ${result - min}`);
}
miniMaxSum(arr);
