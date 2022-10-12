function findTargetSum(array, target) {
    for (let i = 0, j = array.length-1 ; i < j; i++) {
        if (array[j] === target) {
            i--;
            j--;
            continue;
        }else if (array[i] === target) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        
    }
    return array;
}

const ar = [6, 1, 6, 2, 3, 4, 5, 6, 7, 8, 9, 10,6];
const target = 6;
console.log('array : ',ar);
const result = findTargetSum(ar, target);
console.log('result : ',result);