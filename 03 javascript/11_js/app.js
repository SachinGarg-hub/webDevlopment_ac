//js call stack 
function first() {
    console.log("First function called");
    second();
    console.log("First function ended");
}
function second() {
    console.log("Second function called");
    third();
    console.log("Second function ended");
}
function third() {
    console.log("Third function called");
    console.log("Third function ended");
}
first();
// output will be:
// First function called
// Second function called
// Third function called
// Third function ended
// Second function ended
// First function ended
// this is how js call stack works, it follows LIFO (last in first out) method

// asynchronous js
console.log("Start");
setTimeout(() => {
    console.log("This is from setTimeout");
}
    , 2000);
console.log("End");
// output will be:
// Start
// End
// This is from setTimeout
// even though setTimeout is called in between start and end, it gets executed after 2 seconds, demonstrating asynchronous behavior of js
// event loop
// long running task simulation
function longRunningTask() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    return sum;
}
console.log("Before long running task");
setTimeout(() => {
    console.log("Long running task result:", longRunningTask());
}, 0);
console.log("After long running task");
// output will be:
// Before long running task
// After long running task
// Long running task result: 499999999500000000
// even though setTimeout is set to 0 ms, it gets executed after the long running task is completed, demonstrating event loop mechanism in js
// promises
function asyncTask(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Task completed successfully!");
            }
            else {
                reject("Task failed!");
            }
        }, 2000);
    });
}
asyncTask(true)
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.log("Error:", error);
    }
    )
    .finally(() => {
        console.log("Async task finished.");
    });
// output will be after 2 seconds:
// Success: Task completed successfully!
// Async task finished. 
// if asyncTask(false) is called, output will be:
// Error: Task failed!
// Async task finished.
// async await
async function runAsyncTask() {
    try {
        let message = await asyncTask(true);
        console.log("Success:", message);
    } catch (error) {
        console.log("Error:", error);
    }
    finally {
        console.log("Async task finished.");
    }
}
runAsyncTask();
// output will be after 2 seconds:
// Success: Task completed successfully!
// Async task finished.
// if asyncTask(false) is called, output will be:
// Error: Task failed!
// Async task finished.
