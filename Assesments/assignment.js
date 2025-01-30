const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<title>Assignment 1</title>");
    res.write("<body>");
    res.write("<h1>Welcome to the homepage of this assignment</h1>");
    res.write("<button><a href='/users'>Users</a></button>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<title>Users</title>");
    res.write("<body>");
    res.write("<h1>Welcome to the users page</h1>");
    res.write("<ul>");
    res.write("<li>User 1</li>");
    res.write("<li>User 2</li>");
    res.write("<li>User 3</li>");
    res.write("<li>User 4</li>");
    res.write("<li>User 5</li>");
    res.write("</ul>");
    res.write("<button><a href='/register'>Create user</a></button>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }

  if (url === "/register") {
    res.write("<html>");
    res.write("<title>Create User</title>");
    res.write("<body>");
    res.write("<h2>Create User</h2>");
    res.write("<form action='/create-user' method='POST'>");
    res.write(
      "<input name='username' type='text' placeholder='Please enter your user name' required/>"
    );
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[0];
      fs.writeFile("assignmentParsedValue.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});

server.listen(4000);
