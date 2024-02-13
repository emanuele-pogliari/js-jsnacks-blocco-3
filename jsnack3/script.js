const containerElement = document.querySelector(".container");
let backBtn = document.createElement("button");
backBtn.classList.add("btn", "btn-success", "px-2", "py-1", "text-center", "my-4");
let backLink = document.createElement("a");
containerElement.append(backBtn);
backLink.innerHTML = "Back"
backLink.classList.add("text-white", "text-decoration-none")
backLink.href = "../index.html"
backBtn.append(backLink);

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let minPosition = 3;

let maxPosition = 5;


let cuttedArr = cutArray(array, minPosition, maxPosition);

document.querySelector("#result").innerHTML = `Cutted array is ${cuttedArr}`;

function cutArray(arr, min, max) {
    let cutArr = [];
    for (let i = min - 1; i < max; i++) {
        cutArr.push(arr[i]);
    }
    return cutArr;
}








