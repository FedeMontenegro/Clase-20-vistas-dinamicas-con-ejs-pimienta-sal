const db = require("../data/data");

module.exports = {
    index: (req, res) => {
        res.render("index", {
            producto: db
        });
    }
}