/**
 * @param {number[]} digits
 * @return {number[]}
 */

// this method fails when the integer cross the limit.
var plusOneFirstApproach = function (digits) {
    // not using any array built in method.
    let joinedInt = "";
    let pushCount = 0;
    // joining all digits for making integer
    for (value of digits) {
        joinedInt += value;
    }
    // defining an array of N length.
    let addOne = Array(joinedInt.length);

    // adding one with joinedString and back to string
    joinedInt = String(parseInt(joinedInt) + 1);
    // pushing the modified integer one by one.
    while (pushCount < joinedInt.length) {
        addOne[pushCount] = parseInt(joinedInt[pushCount]);
        pushCount++;
    }

    return addOne;
};

// carry approach
var plusOne = function (digits) {
    let carry = 1;

    for (i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);

        if (carry === 0) break;
    }

    if (carry > 0) {
        digits.unshift(carry);
    }

    return digits;
};

console.log(plusOne([9, 9, 9]));


// leetcode solution:
const solutionLink =
    "https://leetcode.com/problems/plus-one/solutions/7012225/simulate-addition-with-carry-from-least-cgafd";
// time complexity O(n)
// space complexity O(1)