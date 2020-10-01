function palindrome(string) {
    function reverseString(reversedString) {
        let split = reversedString.split("");
        let reverse = split.reverse();
        return reverse.join("");
    }
    return string === reverseString(string);
}
console.log(palindrome("hello"));
console.log(palindrome("abcba"));
