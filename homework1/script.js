function arrCopy(arr){
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        arr1[i] = arr[i]
    }
    return arr1;
}

const arr1 = arrCopy([1,2,3])
const arr2 = arrCopy([1,2,3,[10,20]])
console.log(arr1)
console.log(arr2)