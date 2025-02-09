function diagonalDifference(arr) {
    let l2r = 0;
    let r2l = 0;
    let r2lCounter = arr.length-1;

    for (let i = 0; i < arr.length; i++) {
        l2r += arr[i][i];
        r2l += arr[i][r2lCounter];
        r2lCounter--;
    }

    return Math.abs(l2r - r2l);
}

let matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
];

console.log(diagonalDifference(matrix));