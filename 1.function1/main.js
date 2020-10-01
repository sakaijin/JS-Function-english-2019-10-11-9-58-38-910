function reverseString(string){
    let split = string.split("");
    let reverse = split.reverse();
    return reverse.join("");
}
console.log(reverseString("hello"));