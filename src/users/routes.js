const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUsers);
router.get("/:id", controller.getUsersById);
router.delete("/:id", controller.removeUsers);
router.put("/:id", controller.updateUser);


module.exports = router;