var express = require("express");
var router = express.Router();
var ticketsCtrl = require("../controllers/tickets");

router.post("/flights/:id/ticket", ticketsCtrl.create);
router.delete("/:id/tickets/delete", ticketsCtrl.delete);
module.exports = router;
