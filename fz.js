function getData() {
    alert("The button is clicked!")
}

function Hover() {
    console.log("The mouse is on the button")
}

function DocumentText() {
    document.write("You just clicked the Document button")
}

function getText() {
    var a = document.getElementById("xyz").innerHTML;
    console.log(a)
}

function getHTMLText() {
    var a = document.getElementById("xyz").innerHTML;
    document.getElementById("abc").innerHTML = a;
}