    // const express = require("express");
    // const customerController = require("./controllers/customerController");
    // const productController = require("./controllers/productController");
    // const orderController = require("./controllers/orderController");


    import express from 'express';
    import customerController  from './controllers/customerController';
    import productController  from './controllers/productController';
    import orderController  from './controllers/orderController';
    const app = express();


    app.use('/',(req, res, next)=>{
        console.log('Request URL1'+req.url)
        next();
    },(req, res, next)=>{
        console.log('Request URL2'+req.url)
        next();
    })
    /**
     * Customers endpoints
     */
    app.get("/", function(req, res, next){
        console.log(typeof res.json);
        res.send({'test':'atif'});
        // res.send("Yay Node Girls!");
        // console.log(res);
    });

    /**
     * Customers endpoints
     */
    app.get("/customers", customerController.getAll);
    app.get("/customers/:id", customerController.getOne);
    /**
     * Products endpoints
     */
    app.get("/products", productController.getAll);
    app.get("/products/:id", productController.getOne);
    /**
     * Order endpoints
     */
    app.get("/orders", orderController.getAll);
    app.get("/orders/:id", orderController.getOne);

    module.exports = app;
