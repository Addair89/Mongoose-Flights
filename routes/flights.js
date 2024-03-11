var express = require("express");
var router = express.Router();
var flightsCtrl = require("../controllers/flights");

/* All routes start with /flights */
router.get("/", flightsCtrl.index);
router.get("/new", flightsCtrl.new);
router.get("/sortasc", flightsCtrl.showAsc);
router.get("/sortdsc", flightsCtrl.showDsc);
router.post("/", flightsCtrl.create);
module.exports = router;
