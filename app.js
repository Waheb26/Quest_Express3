const express = require("express");
const app = express();
const port = 5000;

const users = [
  { id: 1, name: "Nico" },
  { id: 2, name: "Wil" },
  { id: 3, name: "Nils" },
];

app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
});

app.listen(5000, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log("Server is listening on ${port}");
  }
});
