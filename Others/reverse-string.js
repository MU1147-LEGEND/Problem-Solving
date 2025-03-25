var str = "Mohammad Ullah";
let temp="";
let counter = str.length-1;

while(counter>=0){
    temp += str[counter];
    counter--;
}
let reversedArr = temp.split(" ");
counter = reversedArr.length-1;
temp = []
while(counter>=0){
    temp.push(reversedArr[counter])
    counter--;
}
console.log(temp.join(" "));

// optimised version of string reverse.
let revStr = str.split(" ").reverse().join(" ").split("").reverse().join("");

console.log(revStr);
