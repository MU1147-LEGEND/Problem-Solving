var longestCommonPrefix = function (strs) {
    const sorted = strs.sort();
    let f = 0;
    let b = sorted.length - 1;
    let common = "";
    if (sorted[f].trim() === "") return common;
    if (sorted.length === 1) return sorted[f];

    while (f < b) {
        for (let i = 0; i < sorted[f].length; i++) {
            if (sorted[f][i] !== sorted[b][i]) return common;
            common += sorted[f][i];
        }
        return common;
    }
};

console.log(longestCommonPrefix(["flower", "flow", "flowid"])); //expected "flow"
