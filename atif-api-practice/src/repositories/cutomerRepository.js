const customers = require("./db/customers.json");

function getAll() {
  return customers;
}

function getOne(id) {
  return customers.find(c => c.id == Number(id));
}

module.exports = {
  getAll,
  getOne
};
