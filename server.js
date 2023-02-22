const express = require("express");
const cors = require('cors')
const usersRoutes = require(`./src/users/routes`);
const productsRoutes = require("./src/products/routes")

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World !");
});

app.use("/users", usersRoutes);
app.use("/products", productsRoutes)

app.listen(port, () => console.log(`app listening on port ${port}`));