var productService = require('../services/productService');
var express = require('express');
var router = express.Router();
var mongoose =require('mongoose');
var keys = require('../config/keys');

module.exports = app =>{
  app.post('/api/product',(req,res)=>{
    productService.createProduct(req.body);
    res.send({"registered": "1"}); 
  })

  app.get('/api/product',(req,res)=>{
    var respuesta = productService.searchProducts();
    respuesta.then((response)=>{
      res.send(response);
    })
  })

  app.delete('/api/product',(req,res)=>{
    productService.deleteProduct(req.body);
    res.send({"registered": "1"}); 
  })
}
  