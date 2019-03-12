import express from 'express';
import customerRepo from '../repositories/cutomerRepository';
import uuidv4 from 'uuid';

const router = express.Router();

function getAll(req, res, next) {
  // console.log(req);
  res.json(customerRepo.getAll());
}

function getOne(req, res, next) {
  const id = req.params.id;
  res.json(customerRepo.getOne(id));
}
function addCustomer (req, res, next) {
  const id = uuidv4();
  console.log('*************************',req.body);
  const { firstName, lastName, dateOfBirth } = req.body
  const customer = {
    id,
    firstName,
    lastName,
    dateOfBirth,
    addedBy: req.me.firstName
  }
  // res.json(customer)
  res.json(customerRepo.addCustomer(customer));
}

function deleteCustomer (req, res, next) {
  res.json(customerRepo.deleteCustomer(req.params.id));
}


router.get("/", getAll)
    .get("/:id", getOne)
    .post("/add", addCustomer)
    .delete("/:id", deleteCustomer);



export default router;