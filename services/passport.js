const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

//El método serialize, no obtiene el ID de google, sino el ID del registro en la BD.

passport.serializeUser((user,done)=>{
    console.log("Entro en Serialize");
    done(null,user.id);
});


//El método deserialize, a traves del ID, obtiene el user.
passport.deserializeUser((id,done)=>{
    console.log(id);
    User.findById(id)
        .then(user=>{
            console.log(user);
            done(null,user)
        })
        .catch(error=>{
            console.log(error);
        });
});

//para que passport entienda la estrategia. Las estrategias es el detalle de un login en particular
//por ejemplo, google, fb, etc.s
passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
},async (accessToken,refreshToken,profile,done)=>{
    
    var existingUser = await User.findOne({
        googleId:profile.id
    })
    
    if(existingUser){
        //Ya existe el usuario en la BD
        return done(null,existingUser);
    }
   
    //En caso de no existir, se crea uno nuevo
    var user = await new User({googleId:profile.id,credits:0}).save();
    done(null,user);
}
));

passport.use(new FacebookStrategy({
    clientID:keys.facebookClientID,
    clientSecret:keys.facebookClientSecret,
    callbackURL:'/auth/facebook/callback'
},async (accessToken,refreshToken,profile,done)=>{
    
    var existingUser = await User.findOne({
        facebookId:profile.id
    });
   
    if(existingUser){
        //Ya existe el usuario en la BD
        return done(null,existingUser);
    }
   
    //En caso de no existir, se crea uno nuevo
    var user = await new User({facebookId:profile.id,credits:0}).save();
    done(null,user);
        
    })
);
