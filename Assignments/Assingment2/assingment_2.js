// Have to make rest api  with help of fs module create json and read and fetch  ( on json file)
import http from "http";
import fs from "fs";

const port = 3000;

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to REST API");
  }

  else if (url === "/create" && method === "POST") {
    const data = {
      id: 101,
      name: "ABCD",
      email: "abcd25b101.abes.ac.in"
    };

    fs.writeFile("users.json", JSON.stringify(data, null, 2), (err) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Error creating JSON file");
      }

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        message: "JSON file created successfully",
        data: data
      }));
    });
  }

  else if (url === "/users" && method === "GET") {
    fs.readFile("users.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("JSON file not found");
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });
  }

  else if (url.startsWith("/users/") && method === "GET") {
    const id = url.split("/")[2];

    fs.readFile("users.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("JSON file not found");
      }

      const user = JSON.parse(data);

      if (user.id == id) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("User not found");
      }
    });
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});