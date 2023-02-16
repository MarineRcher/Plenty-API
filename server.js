const express = require("express");
const usersRoutes = require(`./src/users/routes`);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World !");
});

app.use("/users", usersRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));