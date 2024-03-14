var express = require("express");
var router = express.Router();
var destinationsCtrl = require("../controllers/destinations");

router.get("/sortasc/:id", destinationsCtrl.showAsc);
router.get("/sortdsc/:id", destinationsCtrl.showDsc);
router.put("/:id", destinationsCtrl.update);

module.exports = router;
