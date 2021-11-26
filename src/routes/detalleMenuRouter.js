const express = require("express");
const router = express.Router();
const {index, detalle} = require("../controllers/detalleMenuController");

/* Vista detalleMenu */
router.get("/", index);

/* Vista detalleMenu por parametro */
router.get("/:id", detalle);

module.exports = router;