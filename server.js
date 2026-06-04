const express = require("express");
const cors = require("cors");
const products = require("./product.json");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("Public"));

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});