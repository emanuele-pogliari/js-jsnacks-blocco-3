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