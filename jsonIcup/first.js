document.getElementById("getreq").addEventListener('click', getData)

function getData(){
    let request = new XMLHttpRequest();
    request.open("GET", "data.json", true);
    JSON.stringify(request.responseType);
    request.onload = function(){
        for(let i in request.responseText){
            document.write(request.responseText[i])
        }
    }
    request.send()
}