const orderRepo = require('../repositories/orderRepository')

function getAll(req, res, next) {
   console.log( 'hit /orders' )

   res.json( orderRepo.getAll() )
}

function getOne(req, res, next) {
   console.log( 'hit /orders/:id' )

   const id = req.params.id;

   res.json( orderRepo.getOne(id) )
}

module.exports = {
   getAll,
   getOne
}