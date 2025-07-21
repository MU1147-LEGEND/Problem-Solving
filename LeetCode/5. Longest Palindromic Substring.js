/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let substr = s[0];
    let left;
    let right;
    // looping through the string
    for (i = 0; i < s.length; i++) {
        // odd length string checking (center at i)
        left = i - 1;
        right = i + 1;
        // checking and expanding substring area
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // storing the subsring
        let oddPalindrome = s.substring(left + 1, right);

        if (oddPalindrome.length > substr.length) {
            substr = oddPalindrome;
        }

        // even length string checking (center at i and i+1)
        left = i;
        right = i + 1;
        // checking and expanding substring area
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // storing the subsring
        let evenPalindrome = s.substring(left + 1, right);

        if (evenPalindrome.length > substr.length) {
            substr = evenPalindrome;
        }
    }

    return substr;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("etbababd"));
console.log(longestPalindrome("cbbd")); //bb

//  babab -> babab

// leetcode solution:
const solutionLink = undefined;
// time complexity O(n^2)
// space complexity O(1)
