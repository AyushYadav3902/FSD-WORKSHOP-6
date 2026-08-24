import { EventEmitter } from "node:events";

function createDOMElement() {
  const emitter = new EventEmitter();

  return {
    addEventListener(eventName, callback) {
      emitter.on(eventName, callback);
    },
    removeEventListener(eventName, callback) {
      emitter.off(eventName, callback);
    },
    dispatchEvent(event) {
      emitter.emit(event.type, event);
    },
  };
}

// Create a "save" button
const saveButton = createDOMElement();

// Register a listener for the "click" event
function handleSave(event) {
  console.log("Save button clicked!");
  console.log("Data to save:", event.detail);
}

saveButton.addEventListener("click", handleSave);

// Simulate the user clicking "Save"
saveButton.dispatchEvent({
  type: "click",
  detail: { form: "profile", values: { name: "Ada", email: "ada@example.com" } },
});
