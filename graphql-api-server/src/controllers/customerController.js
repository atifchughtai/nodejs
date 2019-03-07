const customerRepo = require("../repositories/customerRepository");

function getAll(req, res, next) {
  console.log("Customer Controller - getAll");

  res.json(customerRepo.getAll());
}

function getOne(req, res, next) {
  console.log("Customer Controller - getOne - ", req.params.id);

  const id = req.params.id;

  res.json(customerRepo.getOne(id));
}

function create(req, res, next) {
  console.log("Customer Controller - create - ", JSON.stringify(req.body));

  const customer = req.body;

  res.json(customerRepo.create(customer));
}
module.exports = {
  getAll,
  getOne,
  create
};
