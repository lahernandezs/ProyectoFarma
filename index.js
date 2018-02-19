const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app=express();

//para que passport entienda la estrategia. Las estrategias es el detalle de un loggin en particular
//por ejemplo, google, fb, etc.s
passport.use(new GoogleStrategy());

//clientId 253347017840-eo8luvt84nu56vt8ga6o6j8cqaec5mct.apps.googleusercontent.com
//Secret 4701deFWyJoGFcbaeecK_2rU

app.post('/auth/google',(req,res)=>{
    res.send(req);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);