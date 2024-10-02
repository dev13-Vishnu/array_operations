//Problem: Given a sorted array of integers that can contain duplicates, return the index of the first occurrence of the target. If the target is not present, return -1.

function firstOccuranceRecurssion(arr, target, left, right){
    if(left > right){
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if((mid === 0 || arr[mid - 1] < target) && arr [mid] === target) {
        return mid;
    }

    if(arr[mid] >= target){
        return firstOccuranceRecurssion( arr, target, left, mid - 1) ;
    }else{
        return firstOccuranceRecurssion(arr, target, mid + 1, right);
    }
}

let arr = [ 1, 2, 3, 3, 4, 5, 5, 6, 7, 8];

console.log(firstOccuranceRecurssion(arr, 3, 0, arr.length - 1));