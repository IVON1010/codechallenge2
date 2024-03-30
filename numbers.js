function letArray(start, end) {
    let outcome = [];
    //used .push to add elements to the array.
    //we use for loop to iterate over the elements.
    for (i = start; i <= end; i++) {
        outcome.push(i);
    }
    return outcome;
}
let outcome = letArray(-4, 7);

console.log(outcome)