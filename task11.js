function anagrams(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(anagrams("listen", "silent")); // true
console.log(anagrams("hello", "world"));   // false
