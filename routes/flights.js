var express = require("express");
var router = express.Router();
var flightsCtrl = require("../controllers/flights");

/* All routes start with /flights */
router.get("/", flightsCtrl.index);
router.get("/:id/tickets/new", flightsCtrl.ticket);
router.get("/new", flightsCtrl.new);
router.get("/sortasc", flightsCtrl.showAsc);
router.get("/sortdsc", flightsCtrl.showDsc);
router.get("/:id", flightsCtrl.showOne);
router.post("/", flightsCtrl.create);
module.exports = router;
