const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<header><title>Enter Message</title></header>");
    res.write(
      "<body><form action='/message' method='POST'><input placeholder='Please enter your message'type='text' name='message'/><button type=''>Send/Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<header><title>My Node Application</title></header>");
  res.write("<body><h1>Hello Augustine. I am going to be great!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
