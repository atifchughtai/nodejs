import express from 'express';
import orderRepo from '../repositories/orderRepository';

const router = express.Router();

function getAll(req, res, next) {
  res.json(orderRepo.getAll());
}
function getOne(req, res, next) {
  const id = req.params.id;
  res.json(orderRepo.getOne(id));
}

router.get("/", getAll)
    .get("/:id", getOne)



export default router;