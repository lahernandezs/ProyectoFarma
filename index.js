const express = require('express');
const users = require('./models/User');
require('./services/passport');
const model1 = require('./models/Product');
const drugstoreModel = require('./models/Drugstore');
const laboratoryModel = require('./models/Laboratory');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.json());
//la propiedad MaxAge indica cuánto va a durar el cookie como válido (milisegundos)
app.use(
    cookieSession({
        maxAge:30 * 24 * 60 * 60 * 1000,
        keys:[keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());


const authRoutes = require('./controllers/authRoutes')(app);
const billingRoutes = require('./controllers/billingRoutes')(app);
const productRoutes = require('./controllers/productRoutes')(app);
const drugstoreRoutes = require('./controllers/drugstoreRoutes')(app);
const laboratoryRoutes = require('./controllers/laboratoryRoutes')(app);

mongoose.connect(
    keys.mongooseDBURI
    )

if(process.env.NODE_ENV ==='production'){
     //Making sure that express will serve up production assets like our main.js or main.css
    app.use(express.static('client/build'));
     //express will serve our index.html file if the route isn't found.
     const path = require('path');
     app.get('*',(req,res)=>{
         res.sendFile(path.resolve(__dirname,'client','build','index.html'));
     })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT); 