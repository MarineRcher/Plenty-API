//get
const getProducts = "SELECT * FROM products";
const getProductByName = "SELECT * FROM products WHERE name = $1"
//add
const addProduct = "INSERT INTO products (name, image, price, store, tag) VALUES ($1, $2, $3, $4, $5)"


module.exports = {
    getProducts,
    getProductByName,
    addProduct
}