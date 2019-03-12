import customersData from './db/customers.json';

let [...customers] = customersData;
// console.log(typeof customers[0].id)

function getAll() {
  return customers;
}

function getOne(id) {
  return customers.find(c => c.id == id);
}

function addCustomer (customer) {
  customers.push(customer);
}

function deleteCustomer (customerId) {
  // const [] = customers;
  return customers = customers.filter(customer => {
    return customer.id !== customerId;
  });
}
module.exports = {
  getAll,
  getOne,
  addCustomer,
  deleteCustomer
};
