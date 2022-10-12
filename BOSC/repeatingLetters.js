const word = "abccbaa";

const array = word.split("")

for ( let i = 0; i < array.length; i++ ) {
    if ( array [ i ] === array[ i + 1]) {
        console.log(array[i]);
        break;
    }
}