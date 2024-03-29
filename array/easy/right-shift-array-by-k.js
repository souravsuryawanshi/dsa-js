// My Approach 1 O(n*k)
function shiftArrayByK(array,k){
    let array1 = new Array(array.length).fill(0);
    for(let i=0;i<k;i++){
        for(let j=0;j<array.length-1;j++){
           array1[j+1]=array[j];
        }
        let lastElement = array[array.length-1]
        array1[0]=lastElement;   
        for(let x=0;x<array.length;x++){
            array[x]=array1[x];
        }
    }
   return array1;
}

shiftArrayByK([1,2,3,4,5],11);



function rightShiftByK(array,n,k){
    reverseArray(array,n-k,n-1);
    reverseArray(array,0,k-2);
    reverseArray(array,0,n-1);
}
function reverseArray(array,i,j){
    let x = i;
    let y = j;
    while(x<j){
        let t = array[x];
        array[x] = array[y];
        array[y] = t;
        x++;
        y--;
    }
}
shiftByK([1,2,3,4,5],5,3);