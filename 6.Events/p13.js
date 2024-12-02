let pBody = document.querySelector("body")
let cBtn = document.querySelector(".close")
let cMenu = document.querySelector(".context-menu")

pBody.addEventListener("contextmenu", (event) => {
    event.preventDefault();

    console.log(`x = ${event.clientX}px and y=${event.clientY}px`)

    // cursor position
    cMenu.style.left = `${event.clientX}px`;
    cMenu.style.top = `${event.clientY}px`;

    // add active class
    cMenu.classList.add("active")
});

// close menu
cBtn.addEventListener("click", function(){
    cMenu.classList.remove("active")
});