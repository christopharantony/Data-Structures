const array = [[1,2,3],[0,0,1],[2,3,4],[3,4,5],[0,1,2]]
let sum1 = 0;
let index = 0;

for (let i = 0; i < array.length; i++) {
    let sum2 = 0; 
    for (let j = 0; j < array[i].length; j++) {
        sum2 += array[i][j];
    }
    if (sum1 < sum2) {
        sum1 = sum2;
        index = i;
    }
}

console.log(index);