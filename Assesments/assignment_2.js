const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "home.html"));
});

// Users route
app.get("/users", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "users.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(4000);
