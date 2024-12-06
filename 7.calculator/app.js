
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
            // remove values of input one by one from the last position
            let x = inTxt.innerText.slice(0,-1)
            inTxt.textContent = x;
        } else if (inp === "=") {
            // calculation
            let res = eval(inTxt.innerText)
            outTxt.innerText = res;
        } else if (inp === "Exp") {
            if(!isNaN(inTxt.innerText)) {
                let res = Math.exp(inTxt.innerText)
                outTxt.textContent = res;
            } else {
                outTxt.textContent = "Input is Not a Number"
            }
        } else if (inp === "Cbrt") {
            if(!isNaN(inTxt.innerText)) {
                let res = Math.cbrt(inTxt.innerText)
                outTxt.textContent = res;
            } else {
                outTxt.textContent = "Input is Not a Number"
            }
        } else if (inp === "Sqrt") {
            if(!isNaN(inTxt.innerText)) {
                let res = Math.sqrt(inTxt.innerText)
                outTxt.textContent = res;
            } else {
                outTxt.textContent = "Input is Not a Number"
            }
        }else {
            // print the input 
            inTxt.textContent += inp;
        }
    });
}