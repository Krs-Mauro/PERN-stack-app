const router = require("express").Router();
const controller = require("./controller");

router.get("/getUserByEmail", controller.getUserByEmail);
router.get("/getUserById", controller.getUserById);
router.post("/addUser", controller.addUser);
router.put("/logUserIn", controller.logUserIn);
router.put("/logUserOut", controller.logUserOut);

module.exports = router;
