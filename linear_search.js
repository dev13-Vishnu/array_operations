let arr1 = [ 1, 2, 3, 4, 5, 6];

function linearSearch(arr, target) {
    for (let i = 0;i<arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -i;

}

console.log(linearSearch(arr1,3));