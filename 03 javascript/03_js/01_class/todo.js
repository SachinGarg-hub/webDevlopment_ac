let todo = [];
let req = prompt("please enter your request");

while (true) {
    if (req == "quit") {
        console.log("Quitting app");
        break;
    }
    else if (req == "list") {
        console.log("---------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("---------------");
    }
    else if (req == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    }
    else if (req == "delete") {
        let idx = prompt("please enter the task index");
        idx = parseInt(idx);   // string ko number me convert
        if (idx >= 0 && idx < todo.length) {
            todo.splice(idx, 1);
            console.log("Task deleted");
        } else {
            console.log("Invalid index");
        }
    }

    req = prompt("please enter your request");
}
