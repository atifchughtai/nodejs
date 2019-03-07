const express = require("express");
const bodyParser = require("body-parser");

const customerController = require("./controllers/customerController");
const productController = require("./controllers/productController");
const orderController = require("./controllers/orderController");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send(`
   <a href="/customers">Customers</a> <br />
   <a href="/products">Products</a> <br />
   <a href="/orders">Orders</a>
   `);
});

/**
 * Customers endpoints
 */
app.get("/customers", customerController.getAll);
app.get("/customers/:id", customerController.getOne);
app.post("/customers", customerController.create);

/**
 * Orders endpoints
 */
app.get("/orders", orderController.getAll);
app.get("/orders/:id", orderController.getOne);

/**
 * Products endpoints
 */
app.get("/products", productController.getAll);
app.get("/products/:id", productController.getOne);

module.exports = app;
