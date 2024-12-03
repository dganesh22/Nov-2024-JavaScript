
// target all keys
var keys = document.querySelectorAll(".btn");

// display 
let inTxt = document.querySelector(".in")
let outTxt = document.querySelector(".out")

// looping to select all key
for(let item of keys) {
    item.addEventListener("click",function (event) {
        console.log(`value = `, event.target.innerText); 

        // to read key text 
        let inp = event.target.innerText

        if(inp === "CE") {
            // clear all
            inTxt.textContent = "";
            outTxt.textContent = "";

        }else if (inp === "C") {
            // clear input
            inTxt.textContent = "";
        } else if (inp === "BS") {
            // remove values of input one by one
        } else if (inp === "=") {
            // calculation
            let res = eval(inTxt.innerText)
            outTxt.innerText = res;
        } else if (inp === "Exp") {

        } else if (inp === "Cbrt") {

        } else if (inp === "Sqrt") {

        }else {
            // print the input 
            inTxt.textContent += inp;
        }
    });
}