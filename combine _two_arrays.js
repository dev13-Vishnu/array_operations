//Problem: Combine Two Arrays Alternatively Using Recursion

function combinedAlternating(array1, array2){
    let combinedArray = [];
    let maxLength = Math.max(array1.length,array2.length);

    for(let i = 0 ; i < maxLength; i++) {
        if( i < array1.length){
            combinedArray.push(array1[i]);

        }
        if( i < array2.length){
            combinedArray.push(array2[i]);
        }
    }
    return combinedArray;
}
// Example usage:
let array1 = [1, 2, 3];
let array2 = ['a', 'b', 'c', 'd'];
console.log(combinedAlternating(array1, array2)); // Output: [1, 'a', 2, 'b', 3, 'c', 'd']