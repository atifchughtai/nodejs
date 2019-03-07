const products = require("./db/products.json");

function getAll() {
  return products;
}

function getOne(id) {
  return products.find(p => p.id == Number(id));
}

module.exports = {
  getAll,
  getOne
};
