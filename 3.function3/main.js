function sort(string){
    let split = string.split("");
    let sort = split.sort();
    return sort.join("");
}
console.log(sort("hello"));