//1. Problem: Find the First Occurrence of a Target in an Array
// Problem Statement:
// Given an unsorted array of integers arr and a target value target, write a function to find the first occurrence of the target. If the target is not found, return -1.

function firstOccuranceLinear(arr, target){

    for(let i = 0; i < arr.length; i++) {
        if (arr [i] === target) {
            return i;
        }
    }
    return -1;
}

const arr = [7, 5, 3, 8, 5, 2];
const target = 5;
console.log(firstOccuranceLinear(arr, target)); 