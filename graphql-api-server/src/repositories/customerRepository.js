const customers = require("./db/customers.json");

function getAll() {
  console.log("Customer Repository - getAll");

  return customers;
}

function getOne(id) {
  console.log("Customer Repository - getOne", id);

  return customers.find(c => c.id === Number(id));
}
function create(customer) {
  console.log("Customer Repository - create", JSON.stringify(customer));

  customer.id = customers.length + 1;

  customers.push(customer);

  return getOne(customer.id);
}

module.exports = {
  getAll,
  getOne,
  create
};
