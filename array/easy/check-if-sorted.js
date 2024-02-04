function checkIfArraySorted(array){
    for(let i = 0; i < array.length-1; i++){
        if(array[i+1]<array[i]){
            return false;
        }
    }
    return true;
}

console.log(checkIfArraySorted([3,21,22,33]));