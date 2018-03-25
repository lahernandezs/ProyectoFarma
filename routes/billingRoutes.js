const passport = require('passport');
var express = require('express');
var router = express.Router();
var keys = require('../config/keys');
var stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin')


module.exports = app =>{
/************
 * FACTURACION
 ************/
 /**
  * Hacer un pago se le pasa el requireLogin, que es el Middleware
  * que se encarga de validar si el usuario se encuentra logueado.
  */
  app.post('/api/stripe',requireLogin,async (req,res)=>{
    const charge= await stripe.charges.create({
        amount: 500,
        currency: "usd",
        source: req.body.id, // obtained with Stripe.js
        description: "Prueba de Cargo"
      });
    
    req.user.credits +=5;
    const user = await req.user.save();

    res.send(user);
  })
}