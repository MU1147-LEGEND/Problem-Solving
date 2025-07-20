var fibGenerator = function* () {
    let first = 0;
    let second = 1;

    while (true) {
        yield first;

        let next = first + second; // 0+1 = 1
        first = second;
        second = next;
    }
};

const gen = fibGenerator();

console.log(gen.next().value);
console.log(gen.next().value);

// leetcode solution:
const solutionLink =
    "https://leetcode.com/problems/generate-fibonacci-sequence/solutions/6981754/fibonacci-sequence-generator-using-javas-6fur/";

// time complexity O(1)
// space complexity (1)
