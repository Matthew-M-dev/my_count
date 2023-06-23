// name a variable to count from 0
let number = 0;
// name a variable to call your h2 element

let count = document.getElementById("count-el");

//create your button function
function increment() {
    number += 1;
    count.textContent = number;
};
alert("Am working");

let amSaving = document.getElementById("save-el");

function save() {
    amSaving.innerText = "Passenger Count:" + " " + number + "-";
};