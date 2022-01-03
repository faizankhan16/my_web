module.exports = class Android {
    name
    model
    camera
    constructor(n, m, c) {
        this.name = n;
        this.model = m;
        this.camera = c;
    }
    call(a, b) {
        const sum = a+b
        console.log(sum)
    }

    message(a, b) {
        this.call(a, b)
        console.log("it can send messages.")
    } 
}


