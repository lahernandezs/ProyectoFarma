var drugstoreService = require('../services/drugstoreService');
var express = require('express');
var router = express.Router();
var mongoose =require('mongoose');
var keys = require('../config/keys');

module.exports = app =>{
  app.post('/api/drugstore',(req,res)=>{
    drugstoreService.createDrugstore(req.body);
    res.send({"registered": "1"}); 
  })

  app.get('/api/drugstore',(req,res)=>{
    var respuesta = drugstoreService.searchDrugstores();
    respuesta.then((response)=>{
      res.send(response);
    })
  })

  app.delete('/api/drugstore',(req,res)=>{
    drugstoreService.deleteDrugstore(req.body);
    res.send({"registered": "1"}); 
  })
}
  