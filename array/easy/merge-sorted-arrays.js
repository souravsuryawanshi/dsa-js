function mergeSortedArrays(array1, array2){
    if(!array1.length){
        return array2;
    }
    if(!array2.length){
        return array1;
    }
    let i = 0;
    let j = 0;
    let mergedArray = [];
    while(i < array1.length || j< array2.length){
        
        if(i >= array1.length && j < array2.length ){
            while(j < array2.length){
                mergedArray.push(array2[j]);
                j++;
            }
        }
        if(j >= array2.length && i < array1.length ){
            while(i < array1.length){
                mergedArray.push(array1[i]);
                i++;
            }
        }
        if(array1[i]<array2[j]){
            mergedArray.push(array1[i]);
            i++;
        }
        else{
            mergedArray.push(array2[j]);
            j++;
        }
    }
  return mergedArray;

}
console.log(mergeSortedArrays([-1,-1,-1,-1],[-2,-2,-2,-2]));