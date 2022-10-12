// function A (){
//     console.log('A');
//     if ( i < 2  ){
//         i++;
//         A();
//     }
// }
// let i = 0;
// A();


// function A(x) {
//     if ( i <= x) {
//         console.log('A');
//         result = result * i;
//         i++; 
//         A(x)
//     }
//     return result;
// }

// let i = 1;
// let result = 1;
// console.log('Factorial =>',A(5));

// function factorial(n) {
//     if (n===1){
//         return 1;
//     }
//     return n*factorial(n-1);
// }

// console.log(factorial(5));

function factorial(n) {
    if (n <= 1){
        return 1;
    }
    factorial(n-1);
    console.log(n);
    factorial(n-1);
}
factorial(5);