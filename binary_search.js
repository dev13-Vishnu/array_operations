function binarySearch (arr,target) {
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);

        if(target === arr[mid]) {
            return mid;

        }else if (arr[mid] < target) {
            left = mid +1;  
        } else {
            right = mid - 1;
        }
    }
    return "not found";
}

let sortedArr =  [1, 2, 3, 4, 5];

console.log("the target was found in the index:",binarySearch(sortedArr,5));
