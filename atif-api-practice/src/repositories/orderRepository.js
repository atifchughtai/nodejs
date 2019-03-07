const orders = require("./db/orders.json");

function getAll() {
  return orders;
}

function getOne(id) {
  return orders.find(o => o.id == Number(id));
}

module.exports = {
  getAll,
  getOne
};
