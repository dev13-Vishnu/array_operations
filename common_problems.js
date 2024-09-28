let arr1 = [ 1, 8, 2, 3, 4, 5];

let max  = arr1[0];
for (let i = 1; i< arr1.length;i++){
    if(max < arr1[i]){
        max = arr1[i];
    }
}
console.log("the maximum number in the array is:",max);

let reversed = arr1.reverse();

console.log('The reversed array is:', reversed);