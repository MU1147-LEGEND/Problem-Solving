/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let symmetricCounter = 0;
    for (let i = low; i <= high; i++) {
        let numString = i.toString();

        let divider = numString.length / 2;

        if (divider == 1 || divider % 2 === 0) {
            let firstSlice = numString.slice(0, divider).split("").map(Number);
            let lastSlice = numString.slice(divider).split("").map(Number);

            if (reducer(firstSlice) == reducer(lastSlice)) {
                symmetricCounter++;
                console.log(i);
            }
        }
    }

    return symmetricCounter;
};

function reducer(arr) {
    return arr.reduce((prev, curr) => prev + curr, 0);
}

console.log(countSymmetricIntegers(1, 100));

// leetcode solution:
const solutionLink =
    "https://leetcode.com/problems/count-symmetric-integers/solutions/6978755/count-symmetric-integers-in-a-range-by-c-5qff/";
// time complexity O(n)
// space complexity (1)
