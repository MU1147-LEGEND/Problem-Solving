/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // linear / bruteforce
    /* let sq;
    for (let i = 1; i < x; i++) {
        if (i * i <= x) {
            sq = i;
        } else {
            break;
        }
    }
    return sq; */

    // binary method
    let low = 1;
    let high = x;
    let mid;
    let ans;
    while (low <= high) {
        mid = Math.floor((high + low) / 2);

        if (mid * mid > x) {
            high = mid - 1;
        }
        if (mid * mid <= x) {
            low = mid + 1;
            ans = mid;
        }
    }
    return ans;

    // one line solution for js
    // return Math.floor(Math.pow(x, 0.5));
};

