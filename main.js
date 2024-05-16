// opeartion functions

//1- add

function add(a,b){
    return a+b;
}

//2- subtract 

function sub(a,b){
    return a-b;
}

//3- multiply

function multiply(a,b){
    return a*b;
}

//4- divide

function divide(a,b){
    if (b === 0){
        return "nah bruh";
    } else{
        return a/b;
    }
}

// second thing 



// grab the display

const display = document.querySelector("#display");

display.value = "0"

//grabbing all buttons

const oneBtn = document.querySelector("#no1");
const twoBtn = document.querySelector("#no2"); 
const threeBtn = document.querySelector("#no3"); 
const fourBtn = document.querySelector("#no4"); 
const fiveBtn = document.querySelector("#no5"); 
const sixBtn = document.querySelector("#no6"); 
const sevenBtn = document.querySelector("#no7"); 
const eightBtn = document.querySelector("#no8"); 
const nineBtn = document.querySelector("#no9");

oneBtn.addEventListener("onclick", changeDisplay());

function changeDisplay
