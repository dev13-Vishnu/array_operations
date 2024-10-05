// 3. Find Missing Number (Cyclic Sort):
// Problem Statement:
// Given an array containing n distinct numbers taken from the range 0, 1, 2, ..., n, find the one number that is missing from the array.

// Input: nums = [3, 0, 1]
// Output: 2
// Explanation: The missing number is 2 as it is not present in the array.
function missingNum (nums){
    const n = nums.length;
    const totalsum = (n * (n + 1)) /2;
    const arrayTotal = nums.reduce((acc,num) => acc + num,0);
    return (totalsum - arrayTotal);
}

const nums = [3, 0, 1];
console.log( missingNum(nums));