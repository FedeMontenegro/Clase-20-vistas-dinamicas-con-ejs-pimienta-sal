const db = require("../data/data");

module.exports = {
    index: (req, res) => {
        res.render("detalleMenu");
    },
    detalle: (req, res) => {
        let param = req.params.id;

        let detalles = ""

        db.data.find(element => {
            if (element.id == param) {
                detalles = element;
            }
        })
        console.log(detalles);
        res.render("detalleMenu", {detalles});
    }
}