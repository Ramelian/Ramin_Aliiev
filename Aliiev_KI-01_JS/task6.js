function nextBigger(num){
    let numArray = num.toString().split('');

    let i = numArray.length - 2;

    while(i >= 0 && numArray[i] >= numArray[i+1]) i--;

    if(i == -1) return -1;

    let j = numArray.length - 1; 
    while(numArray[j] <= numArray[i]) j--;

    let l = i+1, r = numArray.length - 1;
    while(l < r){
        [numArray[l], numArray[r]] = [numArray[r], numArray[l]];
        l++;
        r--;
    }    

    return parseInt(numArray.join(""));
}

// Examples
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(531));