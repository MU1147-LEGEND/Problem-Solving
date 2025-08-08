/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let p = 0;
        while (p < nums.length) {
            if (nums[p] > nums[p + 1]) {
                [nums[p], nums[p + 1]] = [nums[p + 1], nums[p]];
            }
            p++;
        }
    }

    return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0])); //[0,0,1,1,2,2]
