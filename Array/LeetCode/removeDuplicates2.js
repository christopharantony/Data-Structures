// const nums = [0,0,1,1,1,2,2,3,3,4]
// const nums = [1,1,2]
const nums = [1,1]
let i = 0;

function removeDuplicates (nums) {
    if ( nums[i] === nums[i+1] ) {
        nums.splice(i,1)
    } if ( nums[i] === nums[i-1] ) {
        nums.splice(i,1)
    }
    if (i<nums.length-1) {
        i++;
        removeDuplicates(nums)
    }
    return nums;
}


const result = removeDuplicates(nums);
console.log(result);

