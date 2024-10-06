// 1. Two Sum Problem:
// Problem Statement:
// Given an array of integers, return the indices of the two numbers that add up to a specific target.

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] 
// Explanation: Because nums[0] + nums[1] = 2 + 7 = 9

function twoSum ( nums, target) {
    let map =  new Map();
    for(let i = 0 ; i< nums.length; i++){
        let compliment = target - nums[i];

        if(map.has(compliment)){
            return [map.get(compliment),i]
        }
        map.set(nums[i],i);
    }
    return [];
}


const nums = [ 2, 7 , 11, 15];
const target = 9;

console.log(twoSum(nums,target));