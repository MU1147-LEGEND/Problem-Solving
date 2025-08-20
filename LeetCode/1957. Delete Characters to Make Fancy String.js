/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let count = 1;
    let result = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count <= 2) {
            result.push(s[i]);
        }
    }
    return result.join("");
};

// console.log(makeFancyString("aaabaaaacccc"));
// console.log(makeFancyString("leeetcooode"));

let t = [];
t[0] = "a";
t[1] = "b";
console.log(t);
