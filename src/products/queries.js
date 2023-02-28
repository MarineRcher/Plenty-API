//get
const getProducts = "SELECT * FROM products";
const getProductByName = "SELECT * FROM products WHERE name = $1"
//post
const addProduct = "INSERT INTO products (name, image, price, store, tag) VALUES ($1, $2, $3, $4, $5)"
//put
const editProduct = "UPDATE products SET name = $2, image = $3, price = $4, store = $5, tag = $6 WHERE id = $1"
const addReport = "UPDATE products SET reports = reports + 1 WHERE id = $1"
//delete
const deleteProduct = "DELETE FROM products WHERE id = $1"

module.exports = {
    getProducts,
    getProductByName,
    addProduct,
    editProduct,
    addReport,
    deleteProduct
}