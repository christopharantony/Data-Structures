function findTargetSum(array,target) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i+1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [array[i],array[j]];
            }
        }
    }
    return [0];
}

const array = [0, 5, 7, 9, 4, 0, 2];
const target = 10;
const result = findTargetSum(array, target);
console.log('result : ',result);