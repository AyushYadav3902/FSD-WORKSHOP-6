// make function one of reed file 2nd of update file 3rd function of delete file 4th function of create file
const fs = require('fs');

// Function to read a file
function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data
) => {
        if (err) {
            console.error(`Error reading file from disk: ${err}`);
        } else {
            console.log(`File content:\n${data}`);
        }
    });
}

// Function to update a file
function updateFile(filePath, newData) {
    fs.writeFile(filePath, newData, 'utf8', (err) => {
        if (err) {
            console.error(`Error updating file: ${err}`);
        }
        else {
            console.log(`File updated successfully.`);
        }
    });
}

// Function to delete a file
function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Error deleting file: ${err}`);
        }

        else {
            console.log(`File deleted successfully.`);
        }
    });
}

// Function to create a file
function createFile(filePath, data) {
    fs.writeFile(filePath, data, 'utf8', (err) => {
        if (err) {
            console.error(`Error creating file: ${err}`);
        }
        else {
            console.log(`File created successfully.`);
        }
    });
}

// Example usage
const filePath = 'example.txt';
const newData = 'This is the updated content of the file.';
const dataToWrite = 'This is the content of the new file.';