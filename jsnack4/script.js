let word = "casa";

let sortedWord = sortAlpha(word);


function sortAlpha(wordToSort) {
    return wordToSort.split('').sort().join('');
}


document.querySelector("#result").innerHTML = `${sortedWord}`;