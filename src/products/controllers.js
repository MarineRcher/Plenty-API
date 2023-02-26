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

//permet de modifier un produit
const editProduct = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, price, store, image, tag } = req.body

    pool.query(queries.editProduct, [id, name, image, price, store, tag], (err, result) => {
        if (err) throw err
        console.log("product edited")
        res.status(201).send(result)
    })
}

//permet d'ajouter un avertissement sur le produit afin de l'effacer au bout d'un certain nombre
const addReport = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.addReport, [id], (err, result) => {
        if (err) throw err
        res.status(201).send(result)
    })
}

//permet de supprimer un produit
const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteProduct, [id], (error, results) => {
        const noProdFound = !results.rows.length;
        if (noProdFound) {
            res.send("L'User n'existe pas dans la base de donnée");
        }
        pool.query(queries.deleteProduct, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User Supprimé avec succès");
        });
    });
}

module.exports = {
    getProducts,
    getProductByName,
    addProduct,
    editProduct,
    addReport,
    deleteProduct
}