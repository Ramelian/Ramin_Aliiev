//decided to make recursive way
function digital_root(number){
    let sum = number;

        if(sum > 9){
            arr = sum.toString().split('');
            sum = arr.reduce((total, amount) => parseInt(total) + parseInt(amount));
            return digital_root(sum);
        }
    return sum;
}

console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));