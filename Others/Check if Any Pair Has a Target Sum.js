function hasTargetSum(arr, target) {
    let front = 0
    let back = arr.length -1;

    while(front < back){
        sum = arr[front] + arr[back];
        if(sum === target) return [front,back];
        if(sum < target) front++;
        else back--;
    }
    return false
}

console.log(hasTargetSum([1, 2, 3, 9], 8));
