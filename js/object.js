let names = {
  name: "Shiv",
  greet() {
    // Method as properties of object names
    console.log(this.name)
  },
}

names.greet()

function user(name) {``
  this.name = name
}

let newObj = new user("sdfasdf")
console.log(newObj)
