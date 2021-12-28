
document.getElementById("request").addEventListener('click', getApi)

function getApi() {
    let pName = document.getElementById("name").value;
    alert(pName);
    document.getElementById("apiImage").src = `https://joeschmoe.io/api/v1/${pName}`


}