/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    command = command
        .replaceAll("()", "o")
        .replaceAll("(", "")
        .replaceAll(")", "");

    return command;
};

console.log(interpret("G()(al)"));
