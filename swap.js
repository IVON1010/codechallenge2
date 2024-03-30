function swapCase(str) {
    let myString = '';
    //split() method is used to split into an array of substrings.
    //'' is an empty string in which the strin will be split into individual characters.
    //we use map() method to iterate over each element of an array to perform some operation on each element.
    //The arrow function => is a way of defining a function that takes 'y' as an input.
    str.split('').map(y => {
        if (y == y.toUpperCase()) {
            myString += y.toLowerCase();
        } else {
            myString += y.toUpperCase();
        }
    });
    return myString;
}
console.log(swapCase('The Quick Brown Fox'))