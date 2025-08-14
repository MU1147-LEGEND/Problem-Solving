/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let goodInts = [
        "999",
        "888",
        "777",
        "666",
        "555",
        "444",
        "333",
        "222",
        "111",
        "000",
    ];

    for (let i = 0; i < goodInts.length; i++) {
        if (num.includes(goodInts[i])) {
            return goodInts[i];
        }
    }
    return "";
};

console.log(largestGoodInteger("6777133339"));
