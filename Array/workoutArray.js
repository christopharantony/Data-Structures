const array = []

array.push(1,2)

array.shift()

array.unshift(3)

array.pop()

array.push(4)

array.splice(1,0,2)

const array2 = array.slice(0,2)

array2.push(1,4)

array2.splice(0,1,100)

// array2.sort((a,b) => b-a)

array2.forEach(mine);

function mine (data,index) {
    data += index;
}



console.log(array);

console.log(array2);