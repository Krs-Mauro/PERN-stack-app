const router = require("express").Router();
const controller = require("./controller");

router.get("/getItems", controller.getItems);
router.get("/getItemsByUserId", controller.getItemsByUserId);
router.post("/addItem", controller.addItem);
router.delete("/deleteItem", controller.deleteItem);

module.exports = router;
