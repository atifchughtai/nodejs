const productRepo = require('../repositories/productRepository')

function getAll(req, res, next) {
   console.log( 'hit /products' )

   res.json( productRepo.getAll() )
}

function getOne(req, res, next) {
   console.log( 'hit /products/:id' )

   const id = req.params.id;

   res.json( productRepo.getOne(id) )
}

module.exports = {
   getAll,
   getOne
}