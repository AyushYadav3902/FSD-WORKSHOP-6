console.log("starting the event loop...")

process.nextTick(() => {
    console.log("nextTick callback executed");
});

setTimeout(() => {
    console.log("setTimeout first callback executed");
}, 5000);
setTimeout(() => {
    console.log("setTimeout second callback executed");
}, 1000);

setImmediate(() => {
    console.log("setImmediate callback executed");
});

console.log("ending the event loop...");