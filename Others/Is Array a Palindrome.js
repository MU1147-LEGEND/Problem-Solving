function isPalindromeArray(arr) {
    let front = 0;
    let back = arr.length - 1;

    while (front < back) {
        if (arr[front] !== arr[back]) return false;
        front++;
        back--;
    }
    return true;
}


console.log(isPalindromeArray([]));