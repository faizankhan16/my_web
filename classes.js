export default class Products {
    name
    model
    camera
    static x
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
