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








