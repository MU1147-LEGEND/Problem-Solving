let arr = [1,2,-2,-4, 0];

function plusMinus(arr) {
  let n = arr.length;
  let positive = 0;
  let negetive = 0;
  let zero = 0;
/*
arr.forEach((value)=>{
    if(value > 0){
      positive++;
    }else if(value < 0){
      negetive++;
    }else if(value === 0){
      zero++;
    }
  });
*/  
  
for(n=0; n<arr.length; n++){
    if(arr[n] > 0){
      positive++;
    }
    
    if(arr[n] < 0){
      negetive++;
    }
    
    if(arr[n] === 0){
      zero++;
    }

  }

positive = (positive/n).toFixed(6);
negetive = (negetive/n).toFixed(6);
zero = (zero/n).toFixed(6);

console.log(`${positive}\n${negetive}\n${zero}`);


}

plusMinus(arr);