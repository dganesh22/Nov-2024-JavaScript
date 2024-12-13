/* Accessor properties (get and set) 
    set -> assign 
    get -> retrive
*/

let user = {
    name: "john",
    surName: "mathew"
}

Object.defineProperty(user, "fullname", {
    set: function(val){
        [this.name,this.surName] = val.split(" ") // John mathew
    },
    get: function(){
        return this.name + " " + this.surName
    }
})

console.log(`fullname = `, user.fullname)

user.surName = "david"

console.log(`fullname = `, user.fullname)

user.name = "mary"

console.log(`fullname = `, user.fullname)