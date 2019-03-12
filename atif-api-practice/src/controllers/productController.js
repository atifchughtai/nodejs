import express from 'express';
import productRepo from '../repositories/productRepository';

const router = express.Router();

function getAll(req, res, next) {
  res.json(productRepo.getAll());
}

function getOne(req, res, next) {
  const id = req.params.id;
  res.json(productRepo.getOne(id));
}

router.get("/", getAll)
    .get("/:id", getOne)



export default router;
