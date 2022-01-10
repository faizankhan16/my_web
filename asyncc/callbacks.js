function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("One")
            resolve();
        }, 4000)
    })
}
function two() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Two")
            resolve();
        }, 1000)
    })
}

function three() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Three")
            resolve();
        }, 3000)
    })
}

// one().then(() => {
//     two().then(() => {
//         three().then(() => {
//             console.log("Done!")
//         })
//     })
// })

// (async ()=> {
//     try {
//         await one();
//         await two();
//         await three();
//     }
//     catch(e) {
//         console.log(e)
//     }
// })();






// Callbacks // NOT USED CALL BACK HELL
// Promises
// Await Async
