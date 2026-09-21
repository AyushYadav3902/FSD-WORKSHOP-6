// Have to peroform file handling opertions on JSON file 
import fs from "node:fs/promises";
const filePath = "userData.json";

async function createJsonFile(jsonObject) {
  try {
    const jsonString = JSON.stringify(jsonObject, null, 2);
    await fs.writeFile(filePath, jsonString, "utf8");
    console.log("JSON File created successfully!");
  } catch (err) {
    console.error("Error creating JSON file:", err);
  }
}

async function readJsonFile() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const jsonObject = JSON.parse(data);
    console.log("File Content (Parsed Object):\n", jsonObject);
    return jsonObject;
  } catch (err) {
    console.error("Error reading JSON file:", err);
  }
}

async function updateJsonFile(newProperties) {
  try {
    const currentData = await readJsonFile();
    if (!currentData) return;

    const updatedData = { ...currentData, ...newProperties };

    await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), "utf8");
    console.log("JSON File updated successfully!");
  } catch (err) {
    console.error("Error updating JSON file:", err);
  }
}

async function deleteJsonFile() {
  try {
    await fs.unlink(filePath);
    console.log("JSON File deleted successfully!");
  } catch (err) {
    console.error("Error deleting JSON file:", err);
  }
}

async function runDemo() {
  await createJsonFile({ 
    name: "John Doe", 
    role: "Developer", 
    message: "This file is created from FileServer.js using JS codes !!! Hurrey !" 
  });

  await updateJsonFile({ 
    bossMessage: "Hey everyone I am your Boss !!! Hahahaha...",
    status: "Active" 
  });

  await readJsonFile();

  await deleteJsonFile();
}

runDemo();