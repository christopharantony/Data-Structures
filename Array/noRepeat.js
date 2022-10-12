const array = [1,2,3,2,3,5,2,1,8,0]

// const result = new Set(array);

// const x = Array.from(result)

// console.log(x);

for ( let i = 0; i < array.length-1 ; i++ ) {
    for ( let j = i+1; j < array.length; j++ ) {
        if ( array[i] > array[j] ) {
            array[i] += array[j];
            array[j] = array[i] - array[j];
            array[i] -= array[j]; 
        }
    }
        if ( array[i] === array[i+1] ) {
            for ( let j = i+1 ; j < i+1 ; J++ ) {
                
            }
            array[i] = array[i+1]
        } else {
            continue ;
        }
}

console.log(array);