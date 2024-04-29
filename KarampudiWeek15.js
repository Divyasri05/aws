//prompt for the background color
var color = prompt("Enter a color for the background:");
document.body.style.backgroundColor = color;


// Function changebackgroundcolor:
function changeBackgroundColor() {
    var color = prompt("Enter a color of your choice:");
    document.body.style.backgroundColor = color;
}

// Function convert entered string in to array
function convertToArray(input) {
    return input.split(",").map(Number);
}
//function to cube each entered array
function cubeArray(arr) {
    return arr.map(function(x) {
        return Math.pow(x, 3);
    });
}

//function to sort and reverse the entered array
function sortAndReverseArray(arr) {
    return arr.slice().sort(function(a, b) {
        return a - b;
    }).reverse();
}

//function to find the index of the element in array
function findIndexOfElement(arr, target) {
    return arr.indexOf(target);
}//find IndexofElement ends here 

function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    var inputArray = document.getElementById("inputArray").value;
    var targetNumber = parseInt(document.getElementById("targetNumber").value);
    console.log("Input Array:", inputArray);
    console.log("Target Number:", targetNumber);

    var array = convertToArray(inputArray);
    console.log("Converted Array:", array);
    var cubedArray = cubeArray(array);
    var sortedReversedArray = sortAndReverseArray(array);
    var targetIndex = findIndexOfElement(array, targetNumber);

    // Display results
    document.getElementById("originalArray").innerText = "Original Array: " + inputArray;
    document.getElementById("cubedArray").innerText = "Cubed Array: " + cubedArray.join(", ");
    document.getElementById("sortedReversedArray").innerText = "Sorted and Reversed Array: " + sortedReversedArray.join(", ");
    if (targetIndex !== -1) {
        document.getElementById("targetIndex").innerText = "Index of target number " + targetNumber + " in original array: " + targetIndex;
    } else {
        document.getElementById("targetIndex").innerText = "Index is :-1";
    }
}//function handleSubmit ends here
document.getElementById("arrayForm").addEventListener("submit", handleSubmit);


window.addEventListener("load",start, false);