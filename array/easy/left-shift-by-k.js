function LeftShiftByK(array,n,k){
    reverseArray(array,0,k-1);
    reverseArray(array,k,n-1);
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
LeftShiftByK([1,2,3,4,5],5,3);