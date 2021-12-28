document.querySelector("#get").addEventListener('click', getData)

function getData() {
    let getValue = document.getElementById("value").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/server/data.txt", true);

    if (getValue == "Haris Saeed") {
        xhr.onload = function () {
            setTimeout(() => {
                document.write(xhr.response)
            }, 2000);
        }

    } else {
        document.write(`Request not found.`)
    }
    xhr.send()
}

