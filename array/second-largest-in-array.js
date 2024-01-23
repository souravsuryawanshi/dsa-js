function secondLargestElement(array){
    if(array.length < 2){
        return -1;
    }
    let idx = -1;
    let largest = 0;
    for(let i=1;i<array.length;i++){
        if(array[i]>array[largest]){
            idx = largest;
            largest = i;
        }
        else if(array[i]!==array[largest]){
          if(idx === -1 || array[i] > array[idx] ){
            idx = i;
        }
    }
    }
    return idx;
}