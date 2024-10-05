// 2. Maximum Subarray (Kadane's Algorithm):
// Problem Statement:
// Find the contiguous subarray within a one-dimensional array of numbers that has the largest sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

function maxSubarray(nums){
    let maxSoFar = nums[0];
    let currentMax = nums[0];

    for(let i = 0; i < nums.length; i++){
        currentMax = Math.max ( nums[i], currentMax + nums[i])
        maxSoFar = Math.max(currentMax, maxSoFar);
    }
    return maxSoFar;
}

const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubarray(nums))