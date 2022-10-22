function first_non_repeating_letter(string){
    for(let i = 0; i < string.length - 1; i++){
        new_string = string.toLowerCase();
        let option = new_string[i];
        if(new_string.indexOf(option) == i && new_string.indexOf(option, i+1) == -1)
            return string[i];
    }

    return "";
}

//Examples
console.log(first_non_repeating_letter("Check"));
console.log(first_non_repeating_letter("New String"));