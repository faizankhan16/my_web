let pro = new Promise((resolve, reject) => {
    let a = true;
    if (a == true) {
        function sum() {
            return 2 + 2;
        }
        resolve(sum())

    }
    else {
        function showError() {
            return `Request Not Found`;
        }
        reject(showError())
    }
})

async function get() {
    let data = await pro;
    console.log(data)
}
get()