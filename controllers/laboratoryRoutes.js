var laboratoryService = require('../services/laboratoryService');
var express = require('express');
var router = express.Router();
var mongoose =require('mongoose');
var keys = require('../config/keys');

module.exports = app =>{
  app.post('/api/laboratory',(req,res)=>{
    laboratoryService.createLaboratory(req.body);
    res.send({"registered": "1"}); 
  })

  app.get('/api/laboratory',(req,res)=>{
    var respuesta = laboratoryService.searchLaboratories();
    respuesta.then((response)=>{
      res.send(response);
    })
  })

  app.delete('/api/laboratory',(req,res)=>{
    laboratoryService.deleteLaboratory(req.body);
    res.send({"deleted": "1"}); 
  })
}
  