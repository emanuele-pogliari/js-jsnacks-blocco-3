const buttonElement = document.querySelector("#convertBtn");
const inputElement = document.querySelector("#input");
const resultElement = document.querySelector("#result");
const formElement = document.querySelector("#form");
const containerElement = document.querySelector(".container");
let backBtn = document.createElement("button");
backBtn.classList.add("btn", "btn-success", "px-2", "py-1", "text-center", "my-4");
let backLink = document.createElement("a");
containerElement.append(backBtn);
backLink.innerHTML = "Back"
backLink.classList.add("text-white", "text-decoration-none")
backLink.href = "../index.html"
backBtn.append(backLink);

let word;

buttonElement.addEventListener("click", function () {
    word = inputElement.value;


    if (!isNaN(word)) {
        alert("Error. Insert a word to reverse");
    }
    else {
        let reverseWord = reverseString(word)
        document.getElementById("result").innerHTML = `Reversed word: ${reverseWord}`;
        resultElement.classList.add("visible");
        resultElement.classList.remove("none");
        formElement.classList.add("none");
        formElement.classList.remove("flex");
    }


})
// function that will use methods to split in single letters and create an array, than will reverse the order of the array and finally will join into a full word and return the value.

function reverseString(string) {
    return string.split("").reverse().join("");
}