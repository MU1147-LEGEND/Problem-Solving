/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let front = 0;
    let back = x.toString().length - 1;
    x = x.toString();

    while (front < back) {
        if (x[front] !== x[back]) return false;

        front++;
        back--;
    }
    return true;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome("madaam")); // false

// better aproach find palindrome using remainder. beats 100%