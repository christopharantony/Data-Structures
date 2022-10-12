const array = [ 1,2,2,3,4,5,5,5,0 ]
let flag;

// for ( let i = 0; i < array.length; i++ ) {
//     flag = -1;
//     for ( let j = 0; j < array.length; j++ ) {
//         if ( array[ i ] === array[ j ] ) {
//             flag++;
//         }
//     }
//     if ( flag === 0 ) {
//         console.log(array[i]);
//     }
// }

for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] !== array[i+1] && array[i] !== array[i-1] ) {
        console.log(array[i]);
    }
}