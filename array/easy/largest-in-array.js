function findLargestInArray(array){
    if(!array.length){
        return -1;
    }
    let idx = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]>array[idx]){
            idx = i;
        }
    }
    return idx;
}