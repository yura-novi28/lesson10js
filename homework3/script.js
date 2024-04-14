let getLength = (arr) => {
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        arr1[i] = arr[i].length
    }
    return arr1;
}

const arr1 = getLength(['Ivan','Pavlo','Ira'])
const arr2 = getLength(['Oleksiy','Andriana'])
console.log(arr1)
console.log(arr2)
