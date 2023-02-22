const { Router } = require('express')
const controller = require("./controllers")

const router = Router()

//GET
router.get("/", controller.getProducts)
router.get("/:name", controller.getProductByName)
router.post("/", controller.addProduct)

module.exports = router;
