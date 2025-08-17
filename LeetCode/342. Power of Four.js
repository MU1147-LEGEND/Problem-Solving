/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    // return (n & n - 1) == 0 && (n - 1) % 3 == 0

    if (n === 1) {
        return true;
    }

    let remainder = n;

    while (remainder >= 1) {
        remainder = remainder / 4;

        if (remainder == 1) {
            return true;
        }
        if (!Number.isInteger(remainder)) {
            return false;
        }
    }
};

console.log(isPowerOfFour(65)); // true;
