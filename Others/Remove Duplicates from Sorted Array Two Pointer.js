function removeDuplicates(arr) {
    let p2 = 0

    for(let i=0; i<arr.length; i++){
        if(i!=p2){
            if(arr[p2] === arr[i]){
                arr.splice(p2,1)
                p2++
            }
        }
    }
    return arr;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //not solved the problem