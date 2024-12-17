let formEl = document.getElementById("userform")
let inpEl = document.getElementById("user")
let out = document.getElementById('out')
let btn = document.getElementById('remove')

formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = inpEl.value;
    console.log(`name = `, name)
    save(name)
});

// remove 
btn.addEventListener("click", function(){
    if(window.confirm(`Are you sure to delete username?`)) {
        sessionStorage.removeItem("user")
        alert("user name deleted")
        print()
    }
})

    
// save the value
function save(val) {
        sessionStorage.setItem("user", val)
        alert("User name added")
        print()
}

// print the value
function print() {
    let user = sessionStorage.getItem("user") || "";
    if(user) {
        out.innerText = user;
    } else {
        out.innerText = "no value";
    }
}

setTimeout(print,4000)