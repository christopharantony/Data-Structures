function findTargetSum(array, target) {
    const nums = new Set() ;
    for (var i = 0; i < array.length; i++) {
        const num = array[i];
        const match = target - num;
        if (nums.has(match)) {
            return [num, match];
        }else{
            nums.add(num);
        }
    }
    return [0];
}

const array = [8, 5, 7, 9, 4, 0, 2];
const target = 10;
const result = findTargetSum(array, target);
console.log('result : ',result);