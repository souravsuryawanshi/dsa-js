

// my approach 
function moveZeroes(array){
    let lastIndex = array.length-1;
    for(let i=0;i<array.length;i++){
         if(array[i]==0 && lastIndex > i){
            let t = array[lastIndex];
            array[i] = t;
            array[lastIndex] = 0;
            lastIndex-=1;
         }
    }
   return array;
} //O(n)


// GFG Inefficient Approach

function swap(i,j, array){
   let t = array[i];
   array[i] = array[j];
   array[j] = t;
}

function moveZeroes(array){
    for(let i=0;i<array.length;i++){
        if(array[i]===0){
            for(let j=i+1;j<array.length;j++){
                if(array[j]!=0){
                    swap(i,j,array);
                }
            }
        }
    }
}


//GFG Efficient 

function moveZeroes(array,n){
    let count = 0;
    for(let i = 0; i < n; i++){
        if(array[i]!=0){
            swap(i,count,array);
            count++;
        }
    }
}