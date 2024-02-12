let word;

do {
    word = prompt("Inserisci una parola")

} while (!isNaN(word));

reverseWord = reverseString(word)


document.getElementById("result").innerHTML = reverseWord;


// function that will use methods to split in single letters and create an array, than will reverse the order of the array and finally will join into a full word and return the value.
function reverseString(string) {
    return string.split("").reverse().join("");
}