const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app=express();

//para que passport entienda la estrategia. Las estrategias es el detalle de un loggin en particular
//por ejemplo, google, fb, etc.s
passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
},(accessToken)=>{
    console.log('access Token ',accessToken);
  // console.log('refresh Token',refreshToken);
    //console.log('profile',profile);
}));

app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
}));

//app.get('/auth/google/callback/',passport.authenticate('google'));
app.get('/auth/google/callback',(req,res)=>{
    console.log(req);
})
const PORT = process.env.PORT || 5000;
app.listen(PORT);