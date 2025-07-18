var isEmpty = function(obj) {
let objArr = Object.values(obj)

if(objArr.length > 0){
  return false;
}else{
  return true;
}
};

console.log(isEmpty({"x": 5, "y": 42}));  // false
console.log(isEmpty({}));                 // true
console.log(isEmpty([null, false, 0]));   // false