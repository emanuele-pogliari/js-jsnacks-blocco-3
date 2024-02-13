const containerElement = document.querySelector(".container");
let backBtn = document.createElement("button");
backBtn.classList.add("btn", "btn-success", "px-2", "py-1", "text-center", "my-4");
let backLink = document.createElement("a");
containerElement.append(backBtn);
backLink.innerHTML = "Back"
backLink.classList.add("text-white", "text-decoration-none")
backLink.href = "../index.html"
backBtn.append(backLink);

let word = prompt("Inserisci parola");

let sortedWord = sortAlpha(word);


function sortAlpha(wordToSort) {
    return wordToSort.split('').sort().join('');
}


document.querySelector("#result").innerHTML = `${sortedWord}`;