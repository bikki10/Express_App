const express = require("express");
const app = express();

const port = 3000;

const users = [];

app.post('/signup', (req, res) => {
    res.send("Signup page!");

});

app.post('/login', (req, res) => {
    res.send("Login page!");
});

app.get('/questions', (req, res) => {
    res.send("Questions page!");
});

app.get('/submissions', (req, res)=>{
    res.send("Submissions page");
});

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
});

