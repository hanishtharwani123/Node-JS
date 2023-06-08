// FS MODULE : Use to handle file system
const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);

const files1 = fs.readdir("./", function (err, files) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("result", files);
  }
});