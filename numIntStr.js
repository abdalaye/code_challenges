function numInStr(array) { //Without Regex
    let numbers = "0123456789";
    return array.filter(elt => {
        return elt.split('')
                 .filter(sub => numbers.includes(sub))
                 .length > 0;
     });
}

/*function numInStr(array) { //By Regex
    let regex = /\d/; //digital

    return array.filter(elt => {
       return regex.test(elt);
    });
} */


console.log(numInStr(["1a", "a", "2b", "b"])); // ["1a", "2b"]

console.log(numInStr(["abc", "abc10"])); // ["abc10"]

console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ["ab10c", "a10bc"]

console.log(numInStr(["this is a test", "test1"])); // ["test1"]