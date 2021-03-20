const express = require("express");
const app = express();

const root = (req, res) => {
  res.send("I am a root");
};

app.get("/root", root);

function another(req, res) {
  res.send("I am another root");
}

app.get("/another", another);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


const port = 3000;

app.listen(port, () => console.log(`App Listening ${port}`))
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
