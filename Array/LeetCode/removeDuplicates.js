// const nums = [0,0,1,1,1,2,2,3,3,4]
const nums = [1,1,2]
let i = 0;

const result = removeDuplicates(nums);
console.log(result);

function removeDuplicates (nums) {
    if ( nums[i] === nums[i+1] && nums[i] !== "_") {
        nums[i] = "_";
        // temp = nums[i+2];
        // nums[i+2] = nums[i+1];
        // nums[i+1] = temp;
    } else if ( nums[i] === nums[i-1] && nums[i] !== "_") {
        nums[i] = "_"
    }
    if ( nums[i] === "_"){
        nums.splice(i,1)
        nums[nums.length] = "_"
        // temp = nums[i+1];
        // nums[i+1] = "_";
        // nums[i] = temp;
    }
    if (i<nums.length-1) {
        i++;
        removeDuplicates(nums)
    }
    return nums;
}
