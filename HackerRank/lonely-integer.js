function lonelyinteger(a) {
    return eval(a.join('^')); //eval can executes vulnerable codes, it can break security. 
}
let arr = [1,2,3,4,1,2,3]
// console.log(lonelyinteger(arr));




///////////   an alternative solution using new Function constructor, it's more safer!   /////////

let newer = arr.join('^');
let result = new Function(`return ${newer}`)();

console.log(result);