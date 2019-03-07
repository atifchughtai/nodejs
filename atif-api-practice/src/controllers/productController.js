const productRepo = require("../repositories/productRepository");

function getAll(req, res, next) {
  res.json(productRepo.getAll());
}

function getOne(req, res, next) {
  const id = req.params.id;
  res.json(productRepo.getOne(id));
}

module.exports = {
  getAll,
  getOne
};
