function maxSubarraySum(array){
    let n = array.length;
    let sum = 0;
    let max = Number.MIN_VALUE;

    for(let i = 0; i < n; i++){
        sum += array[i];
        if(sum>max){
            max = sum;
        }
        if(sum <= 0){
            sum = 0;
        }
    }
    return sum;
}

console.log(maxSubarraySum([-1,-2,-3,-4,-5]))