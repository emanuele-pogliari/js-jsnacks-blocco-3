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


