const Android = require('./classes')

const redmi = new Android("Redmi", "Note 10", "48 MP");
const iphone = new Android();

// redmi.model = "Note 10";
console.log(redmi.name)
console.log(redmi.model)
console.log(redmi.camera)
// redmi.call()
redmi.message(6, 10)
