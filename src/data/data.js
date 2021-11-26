const fs = require("fs");
const path = require("path");

module.exports = {
    data : JSON.parse(fs.readFileSync(path.join(__dirname, "/dataBase.json"), "utf-8"))
}