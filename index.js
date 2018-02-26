const express = require('express');
const model = require('./models/User');
require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');


const app=express();

//la propiedad MaxAge indica cuánto va a durar el cookie como válido (milisegundos)
app.use(
    cookieSession({
        maxAge:30 * 24 * 60 * 60 * 1000,
        keys:[keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/authRoutes')(app);

mongoose.connect(
    keys.mongooseDBURI
    )

const PORT = process.env.PORT || 5000;
app.listen(PORT); 