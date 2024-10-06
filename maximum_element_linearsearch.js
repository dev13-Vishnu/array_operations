//2. Problem: Find the Maximum Element in an Array
// Problem Statement:
// Given an array of integers arr, write a function to find the maximum element in the array using linear search.

function findMaximum (arr){
    if(arr.length === 0){
        return null;
    }

    let max = arr [0];
    for (let i = 1; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

const arr = [10, 25, 6, 9, 15, 34, 7];
console.log(findMaximum(arr)); 
