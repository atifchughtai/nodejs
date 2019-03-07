const orderRepo = require("../repositories/orderRepository");

function getAll(req, res, next) {
  res.json(orderRepo.getAll());
}
function getOne(req, res, next) {
  const id = req.params.id;
  res.json(orderRepo.getOne(id));
}

module.exports = {
  getAll,
  getOne
};
