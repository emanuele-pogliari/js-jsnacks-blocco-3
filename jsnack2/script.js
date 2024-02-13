const containerElement = document.querySelector(".container");
let backBtn = document.createElement("button");
backBtn.classList.add("btn", "btn-success", "px-2", "py-1", "text-center", "my-4");
let backLink = document.createElement("a");
containerElement.append(backBtn);
backLink.innerHTML = "Back"
backLink.classList.add("text-white", "text-decoration-none")
backLink.href = "../index.html"
backBtn.append(backLink);

let array1 = ["a", "b", "c"];
let array2 = [1, 2, 3];
let finalArray = [];

function mergeArray(array1, array2) {
    let mergeArr = [];
    for (let i = 0; i < array1.length; i++) {
        mergeArr.push(array1[i]);
        mergeArr.push(array2[i]);
    }

    return mergeArr;
}

finalArray = mergeArray(array1, array2);

document.querySelector("#result").innerHTML = `Merged array is ${finalArray}`;