    // const express = require("express");
    // const customerController = require("./controllers/customerController");
    // const productController = require("./controllers/productController");
    // const orderController = require("./controllers/orderController");


    import express from 'express';
    import cors from 'cors';
    import bodyParser from 'body-parser';

    // import customerController  from './controllers/customerController';
    import customerRouter from './controllers/customerController';
    // import productController  from './controllers/productController';
    import productRouter from './controllers/productController';
    import orderRouter from './controllers/orderController';

    // import orderController  from './controllers/orderController';


    const app = express();

    app.use(cors());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());


    app.use((req, res, next)=>{
        req.me = { id: '2', firstName:'Atif'};
        next();
    })

    // app.use('/',(req, res, next)=>{
    //     console.log('Request URL1'+req.url)
    //     next();
    // },(req, res, next)=>{
    //     console.log('Request URL2'+req.url)
    //     next();
    // });


    /**
     * Customers endpoints
     */

     app.use('/customers', customerRouter);
    // app.get("/customers", customerController.getAll);
    // app.get("/customers/:id", customerController.getOne);

    // app.post("/customer", customerController.addCustomer);
    // app.delete("/customers/:id", customerController.deleteCustomer);

    /**
     * Products endpoints
     */
    
    app.use('/products', productRouter);

    // app.get("/products", productController.getAll);
    // app.get("/products/:id", productController.getOne);
    /**
     * Order endpoints
     */
    app.use('/orders', orderRouter);

    export default app;
