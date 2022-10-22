//Used casual method
function countPairs(arr, target){
    let count = 0;

    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] + arr[j] == target)
                count++;    
    

    return count;    
}

//Examples
console.log(countPairs( [1, 5, -1, 2, 3, 2 ], 4));