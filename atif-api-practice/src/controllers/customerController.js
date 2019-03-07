const customerRepo = require("../repositories/cutomerRepository");
function getAll(req, res, next) {
  console.log(req);
  res.json(customerRepo.getAll());
}

function getOne(req, res, next) {
  const id = req.params.id;
  res.json(customerRepo.getOne(id));
}
module.exports = {
  getAll,
  getOne
};
