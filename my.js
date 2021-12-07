function getData() {
    var data = document.getElementById("xyz").innerHTML;
    document.getElementById("abc").innerHTML = data;
}
function changeColor() {
    document.getElementById('xyz').style.color = 'red'
}