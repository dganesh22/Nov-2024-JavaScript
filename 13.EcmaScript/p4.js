// event loops

// functions in loops

var funs = [];

for(let i=0; i< 10; i++) {
    funs.push(function(){
        console.log(`output =`, i)
    });
}

console.log(`funs =`,funs) // method groups

funs.forEach(item => {
    item() // call
})