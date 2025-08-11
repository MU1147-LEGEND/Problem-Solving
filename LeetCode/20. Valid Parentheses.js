/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = s.split("");
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "(" || arr[i] == "{" || arr[i] == "[") {
            stack.push(arr[i]);
        }
        if (arr[i] == ")") {
            if (stack[stack.length - 1] == "(") stack.pop();
            else return false;
        }
        if (arr[i] == "}") {
            if (stack[stack.length - 1] == "{") stack.pop();
            else return false;
        }
        if (arr[i] == "]") {
            if (stack[stack.length - 1] == "[") stack.pop();
            else return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid("(]"));
