const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

var romanToInt = function (s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        // if (
        //     s[i] == "I" ||
        //     s[i] == "V" ||
        //     s[i] == "X" ||
        //     s[i] == "L" ||
        //     s[i] == "C" ||
        //     s[i] == "M" ||
        //     s[i] == "D"
        // ) {

            if (values[s[i + 1]] > values[s[i]]) {
                result -= values[s[i]];
            } else {
                result += values[s[i]];
            }

        // }

        // // add
        // else {
        //     result += values[s[i]];
        // }

    }
    return result;
};

// judging
console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("IV")); // 4
console.log(romanToInt("CM")); // 900


// uncomment to see unoptimised code. both will work fine.