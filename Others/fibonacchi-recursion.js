//  0,1,1,2,3,5,8,13
//            p,c,n
// recursion
// function fibo(n){
//     if(n <= 1){
//         return n;
//     }

//     return fibo(n-1) + fibo(n-2);
// }

// using loop
// function fibo(n) {
//     // if (n <= 1) {
//     //     return n;
//     // }
//     let prev = 0;
//     let curr = 1;
//     let next;
//     for (i = 1; i < n; i++) {
//         next = prev + curr; // 0+1
//         prev = curr; // 1
//         curr = next; //1
//     }
//     return next;
// }

console.log(fibo(45));
