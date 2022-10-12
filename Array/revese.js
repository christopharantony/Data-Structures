const array = [1,54,2,3,90]
let temp;
for (let i = 0,j=array.length-1; j > i; i++,j--) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

console.log(array);


// const array = [1,54,2,3,90]
// for (let i = 0,j=array.length-1; j > i; i++,j--) {
//     array[i] += array[j];
//     array[j] = array[i] - array[j];
//     array[i] -= array[j] 
// }

// console.log(array);