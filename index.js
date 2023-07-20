const express = require("express");
const app = express();
const os = require("os");
const port = 3000;

// const users = [];

// app.post('/signup', (req, res) => {
//     res.send("Signup page!");

// });

// app.post('/login', (req, res) => {
//     res.send("Login page!");
// });

// app.get('/questions', (req, res) => {
//     res.send("Questions page!");
// });

// app.get('/submissions', (req, res)=>{
//     res.send("Submissions page");
// });

// const bikkiApi = require("./routes/route.api"); // Yaha chai module import gareko, routing gareko vanxa yeslai

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
