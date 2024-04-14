function removeDuplicates(arr){
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr1.indexOf(arr[i]) == -1){
            arr1.push(arr[i])
        }
    }
    return arr1;
}

const arr1 = removeDuplicates(["html","css","html","js"])
const arr2 = removeDuplicates(["html","css","js","html","js","python","js","scss"])
console.log(arr1)
console.log(arr2)