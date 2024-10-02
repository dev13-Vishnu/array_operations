function combineAlternatingRecurrsive(arr1, arr2, index = 0, combinedArray = []) {

    if(index >= arr1.length && index >= arr2.length){
        return combinedArray;
    }

    if( index < arr1.length){
        combinedArray.push(arr1[index]);
    }

    if(index < arr2.length){
        combinedArray.push(arr2[index]);
    }

    return combineAlternatingRecurrsive(arr1, arr2, index +1, combinedArray);
}

// Example usage:
let array1 = [1, 2, 3];
let array2 = ['a', 'b', 'c', 'd'];
console.log(combineAlternatingRecurrsive(array1, array2)); // Output: [1, 'a', 2, 'b', 3, 'c', 'd']