function mergeSortedArrays(array1, array2) {
    if (!array1.length) {
        return array2;
    }
    if (!array2.length) {
        return array1;
    }
    let i = 0;
    let j = 0;
    let mergedArray = [];
    while (i < array1.length || j < array2.length) {
        if (i >= array1.length && j < array2.length) {
            while (j < array2.length) {
                mergedArray.push(array2[j]);
                j++;
            }
        } else if (j >= array2.length && i < array1.length) {
            while (i < array1.length) {
                mergedArray.push(array1[i]);
                i++;
            }
        } else {
            if (array1[i] < array2[j]) {
                mergedArray.push(array1[i]);
                i++;
            } else {
                mergedArray.push(array2[j]);
                j++;
            }
        }
    }
    return mergedArray;
}

console.log(mergeSortedArrays([-1, -1, -1, -1], [-2,-2,-2]));


//Second Approch 

const a = [-1,-1,-1,-1];
const b = [-1,-1,-1,-1,-1,-1];
const result = [];

let i =0;j=0;

while(i < a.length || j < b.length) {
 
const aItem = i < a.length ? a[i] : Number.MAX_VALUE;
const bItem = j < b.length ? b[j] : Number.MAX_VALUE;

if(aItem < bItem) {
     result.push(aItem);
     i++;
}else if (bItem < aItem) {
     result.push(bItem);
     j++;
}else {
    result.push(aItem);
    result.push(bItem);
    i++;
    j++;
}

}

console.log("result ->",result.join(","))