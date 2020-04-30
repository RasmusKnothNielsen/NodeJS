

// Event loop
// main thread ---------------


// when to use async:
// open a file, read / write, make a request online, interact with a db

// Promises are syntactical sugar for callbacks
/*
new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve("Everything went well")
        }, 4000);
    } catch {
        reject("Something went wrong")
    }
})
    .then(message => console.log(message))              // When it is resolved, then do this
    .catch(errorMessage => console.log(errorMessage));  // Else do this

*/

// Async/await are syntactical sugar for Promises
function myPromise() {
    // TODO make this "done/fulfilled" after 5 seconds
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 5000)
    });
}

async function callMyPromise() {
    /*
    myPromise().then(response => {
        console.log(response)
    });
    */
    const message = await myPromise();
    console.log(message);
}

callMyPromise();


