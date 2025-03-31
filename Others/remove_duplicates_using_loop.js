let arr = [1,2,3,1,2,3];

// let unique = arr.filter((n)=>{
//   return 
// });

let newArr = [...arr];

for(i = 0; i<newArr.length; i++){
  
  // first time i and j are 0, so we need to check if they are equal or not.
  for(j = 0; j<newArr.length; ++j){
    if(i !== j ){
      if(newArr[i] === newArr[j]){
        newArr.splice(j,1);
      }
      
    }
  }
  

}
console.log("main arr "+arr);
console.log("removed duplicates "+newArr);