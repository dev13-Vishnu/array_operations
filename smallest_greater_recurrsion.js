function smallestGreaterRecurrsion (arr, target, left, right, result = -1){
    if(left > right) {
        return result;
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
        result = arr[mid];
        return smallestGreaterRecurrsion( arr,target, left ,mid -1,result)
    } else {
        
        return smallestGreaterRecurrsion(arr,target,mid + 1, right, result);
    }
}

let array3 = [2, 5, 8, 12, 15, 19];
let target3 = 10;
console.log(smallestGreaterRecurrsion(array3, target3, 0, array3.length - 1)); // Output: 12