/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let count = 0;
    let result = 0;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++;
            result += count;
        } else {
            count = 0;
        }
    }
    return result;
};

console.log(zeroFilledSubarray([0, 0, 0, 0, 1, 0, 0])); //13
