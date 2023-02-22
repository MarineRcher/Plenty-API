const pool = require("../../db")
const queries = require("./queries")

//permet d'afficher tous les produits
const getProducts = (req, res) => {
    pool.query(queries.getProducts, (err, result) => {
        if (err) throw err;
        console.log("want data")
        res.status(200).json(result.rows)
    })
}

//permet d'afficher les produits avec le même nom
const getProductByName = (req, res) => {
    const name = req.params.name
    pool.query(queries.getProductByName, [name], (err, result) => {
        if (err) throw err;
        res.status(200).json(result.name)
    })
}

//permet d'ajouter un produit
const addProduct = (req, res) => {
    const { name, price, store, image, tag } = req.body

    pool.query(queries.addProduct, [name, image, price, store, tag], (err, result) => {
        if (err) throw err
        console.log("product added")
        res.status(201).send("Produit ajouté avec succès")
    })
}

module.exports = {
    getProducts,
    getProductByName,
    addProduct
}