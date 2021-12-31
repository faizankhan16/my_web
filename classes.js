module.exports = class Products {
    name
    model
    camera
    constructor(model, camera) {
        model = model;
        camera = camera;
    }
    call() {
        console.log("It can call")
    }

    message() {
        console.log("it can send messages.")
    } 
}
