const Products = require('./classes')

const redmi = new Products("X", 50);
const iphone = new Products();

redmi.x = 10;
console.log(redmi.x)
