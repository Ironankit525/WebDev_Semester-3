const fs = require('fs');

fs.writeFileSync("index.html", "Hello World");
fs.appendFileSync("index.html", "appending");

let data = fs.readFileSync("index.html");

console.log(data.toString());

fs.unlinkSync("index.html");

fs.mkdirSync("f1")
// fs.writeFileSync("f1/new.py","h1.txt")

// fs.rmdirSync("f1")