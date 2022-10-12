// let a = 6;
// a = inc(a)

// function inc(x) {
//     return ++x;
// }

// console.log(a);

const y = [ 
    {
        name:"Nithi",
        age:21
    }, {
        name:"Chris",
        age:33
    }
]

const x = function ( y ) {
    let obj = {}
    for ( let i = 0; i < y.length; i++ ) {
        obj[ y[i].name ] = y[i].age;
    };
    return obj;
}

const array = x(y)

console.log(array);