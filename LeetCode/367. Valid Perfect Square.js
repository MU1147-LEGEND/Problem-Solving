/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let low = 1;
    let high = num;
    let mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (mid * mid === num) return true;

        if (mid * mid > num) {
            high = mid - 1;
        }
        if (mid * mid < num) {
            low = mid + 1;
        }
    }
    return false;
};

console.log(isPerfectSquare(16)); // true bcz 4*4= 16
