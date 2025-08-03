/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let p1 = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[p1] = nums[i]; // swaping
            p1++;
        }
    }
    console.log(nums);
    return p1;
};

let arr = [3, 2, 2, 3];
let newLength = removeElement(arr, 3);
console.log(arr.slice(0, newLength)); // eita dibe actually removed array
