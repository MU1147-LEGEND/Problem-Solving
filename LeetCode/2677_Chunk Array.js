var chunk = function(arr, size) {
    combineArr = [];
    while(arr.length > 0){
      combineArr.push(arr.splice(0,size));
    }
    return combineArr;
};


arr = [1,2,3,4,5,6]
console.log(chunk(arr, size = 4))