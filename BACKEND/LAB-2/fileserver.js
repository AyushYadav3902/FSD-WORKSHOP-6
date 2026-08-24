import fs from 'node:fs/promises';

const filePath = 'userData.txt';

// Function to create a file
async function createFile(filePath, data) {
    try {
        await fs.writeFile(filePath, data, 'utf8');
        console.log('File created successfully.');
    } catch (err) {
        console.error(`Error creating file: ${err.message}`);
    }
}

// Function to read a file
async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log(`File content:\n${data}`);
    } catch (err) {
        console.error(`Error reading file from disk: ${err.message}`);
    }
}

// Function to update a file
async function updateFile(filePath, newData) {
    try {
        await fs.writeFile(filePath, newData, 'utf8');
        console.log('File updated successfully.');
    } catch (err) {
        console.error(`Error updating file: ${err.message}`);
    }
}

// Function to delete a file
async function deleteFile(filePath) {
    try {
        await fs.unlink(filePath);
        console.log('File deleted successfully.');
    } catch (err) {
        console.error(`Error deleting file: ${err.message}`);
    }
}

// Example usage
async function run() {
    const initialData = 'This is the content of the new file.';
    const updatedData = 'This is the updated content of the file.';

    await createFile(filePath, initialData);
    await readFile(filePath);
    await updateFile(filePath, updatedData);
    await readFile(filePath);
    // await deleteFile(filePath); // Uncomment to test deletion
}

run();