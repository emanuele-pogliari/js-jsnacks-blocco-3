const containerElement = document.querySelector(".container");
let backBtn = document.createElement("button");
backBtn.classList.add("btn", "btn-success", "px-2", "py-1", "text-center", "my-4");
let backLink = document.createElement("a");
containerElement.append(backBtn);
backLink.innerHTML = "Back"
backLink.classList.add("text-white", "text-decoration-none")
backLink.href = "../index.html"
backBtn.append(backLink);

let string = prompt("Inserisci una frase");

function capitalize(fullPhrase) {

    fullPhrase = string.split(" ");
    let letterArrays = [];
    let finalString;

    for (let i = 0; i < fullPhrase.length; i++) {

        let sliced = fullPhrase[i].slice(0, 1).toUpperCase() + fullPhrase[i].slice(1);
        letterArrays.push(sliced);
        finalString = letterArrays.join(" ");

    }

    return finalString;

}

document.querySelector("#result").innerHTML = capitalize(string);


