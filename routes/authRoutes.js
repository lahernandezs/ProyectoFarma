const passport = require('passport');


  
var express = require('express');
var router = express.Router();

module.exports = (app) => {

  /****************
   * AUTENTICACION
   ****************/

  /*
   *Autenticación con Google
   * */
  /* GET home page. */
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  /**
   * Respuesta de la autenticación a Google.
   */
  app.get(
    '/auth/google/callback', passport.authenticate('google'),
    (req, res) => res.redirect('/surveys')
  );

  /*
   *Autenticación con Facebook
   */
  app.get('/auth/facebook', passport.authenticate('facebook'));

  /**
   * Respuesta a la autenticación a Facebook.
   */
  app.get(
    '/auth/facebook/callback', passport.authenticate('facebook'),
    (req, res) => res.redirect('/surveys')
  );

  /**
   * Logout de la aplicación.
   */
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/')
  })

  /**
   * Obtener usuario actual
   */
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
}

