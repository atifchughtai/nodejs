const products = require('./db/products.json')

function getAll() {
   return products
}

function getOne(id) {
   return products.find( c => c.id === Number(id) )
}

module.exports = {
   getAll,
   getOne
}