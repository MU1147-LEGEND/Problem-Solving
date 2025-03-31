let memo = {}; // storage for keeping existing values

function sum(...nums){
  let numsString = JSON.stringify(nums);
  
  if(numsString in memo){
    console.log("From memo Object")
    return memo[numsString];
  }
  else{
    console.log("From calculation")
    return memo[numsString] = nums.reduce(((a,c)=>{return a+c}), 0);
  }

}

console.log(sum(1,2,3));
console.log(sum(1,2,3));
console.log(sum(1,2,3));