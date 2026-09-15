// Step 1: Import necessary core modules
const http = require('http');
const url = require('url');

const PORT = 3000;

// Step 2: Create the HTTP server
const server = http.createServer((req, res) => {
    // Parse the incoming URL and query parameters
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;

    // Step 3: Handle routes using GET method and else-if conditions
    if (method === 'GET' && pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page!');
    } else if (method === 'GET' && pathname === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the About Page!');
    } else if (method === 'GET' && pathname === '/user') {
        // Example reading query parameters: /user?name=John
        const userName = parsedUrl.query.name || 'Guest';
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello, ${userName}!`);
    } else {
        // Fallback for unknown routes or non-GET requests
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Step 4: Start listening for incoming requests
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
