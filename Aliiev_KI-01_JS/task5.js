sorting = (s) => {
    return s.toUpperCase().split(";")
            .map(anthroponym => `(${anthroponym.split(":")[1]}, ${anthroponym.split(":")[0]})`)
            .sort()
            .join(" ");
}

//Example
const s = "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(sorting(s));