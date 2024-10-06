function binarySearch(arr,target,left,right) {
    if(left > right){
        return "not found";
    }

    let mid = Math.floor((left+right)/2);


    if(arr[mid] === target) {
        return mid;
    }
    if( target > arr[mid] ){
        return binarySearch(arr,target,mid+1, right);
    }else{
        return binarySearch(arr,target,left,mid - 1)
    }
}

let arr = [1,2,3,4,5,6,7,8,9];

// let target = 12;
let target = 5;

// console.log(arr.length);

let result = binarySearch(arr, target, 0, arr.length - 1);

console.log(result);