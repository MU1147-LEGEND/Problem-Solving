function moveZeroes(arr) {
    let zeroIndex = 0;
    for (nonZero = 0; nonZero < arr.length; nonZero++) {
        if (arr[nonZero] !== 0) {
            console.log(arr[nonZero]);
            [arr[zeroIndex], arr[nonZero]] = [arr[nonZero], arr[zeroIndex]];
            zeroIndex++;
        }
    }

    return arr;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
