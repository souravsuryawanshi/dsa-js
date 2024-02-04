function findPairEqualSum(array,sum){
    let n = array.length;
    let map = {};
    for(let i = 0; i < n; i++){
          let secondNumber = sum-array[i];
          if(map[array[i]]){
            console.log(array[i],map[array[i]])
          }
          else{
            map[secondNumber] = array[i];
          }
    }
}

findPairEqualSum([1,2,3,4,5,6],5);

