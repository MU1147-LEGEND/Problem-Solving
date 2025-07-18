// function twoSum(nums, target){

// let sum = 0
// let indexes = []
// for(i=0;i<nums.length; i++){

//   for(j=0;j<nums.length; j++){
//     if(i!==j){
//       sum = nums[i] + nums[j]
//       if(sum == target){
//         indexes.push(i,j)
//         return indexes;
//       }
//     }
//   }
// }
// }
// console.log(twoSum([2,7,11,12], 9))


// using two pointer
function twoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let sum = 0;

    while (left < right) {
        sum = arr[left] + arr[right];
        if(sum === target) return [left,right]
        if (sum < target) left++;
        else right--;
    }
}

const arr = [1, 2, 4, 7, 11, 15];
console.log(twoSum(arr, 18)); // [3,4]
