console.log('working!')

var fs = require("fs");

var text = fs.readFileSync("./quotes.txt", "utf-8");

console.log(text)

