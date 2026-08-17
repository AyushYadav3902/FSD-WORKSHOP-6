import{ EventEmitter} from "node:events";
const task = new EventEmitter();

task.on("greet", (name) => {
    console.log(`Hello, ${name}! welcome to the session.`);
});

task.on("exit ", (reason) => {
    console.log(`Session ending. Reason: ${reason}`);
});
task.on("greet" ,()=> {
    console.log("Class is starting now. Please be attentive.");
});
task.on("exit", () => {
    console.log("Thank you for attending the session. Goodbye!");
});

// Exit {Triggering the exit event}
task.emit("greet", "Students")
task.emit("exit", "Session completed successfully.");