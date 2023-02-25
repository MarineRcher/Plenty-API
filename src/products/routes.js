const { Router } = require('express')
const controller = require("./controllers")

const router = Router()

//GET
router.get("/", controller.getProducts)
router.get("/:name", controller.getProductByName)
//POST
router.post("/", controller.addProduct)
//PUT
router.put("/:id", controller.editProduct)
//DELETE
router.delete("/:id", controller.deleteProduct)

module.exports = router;
