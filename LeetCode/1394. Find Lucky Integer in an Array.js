/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    const freqMap = {};
    const luckies = [];
    let maxLucky = -1;
    // creating the frequency key:value pair.
    while (arr.length > 0) {
        if (Object.hasOwn(freqMap, arr[0])) {
            freqMap[arr[0]].push(arr[0]);

            arr.splice(0, 1);
        } else {
            freqMap[arr[0]] = [arr[0]];
            arr.splice(0, 1);
        }
    }

    // finding the lucky numbers
    for (value in freqMap) {
        if (freqMap[value].length == value) {
            luckies.push(Number(value));
        }
    }
    // returning max lucky number
    if (luckies.length > 0) {
        maxLucky = Math.max(...luckies);
    }

    return maxLucky;
};

console.log(findLucky([2, 2, 3, 4]));
console.log(findLucky([2, 2, 2, 3, 3, 3]));
console.log(findLucky([4, 4, 4, 4]));
