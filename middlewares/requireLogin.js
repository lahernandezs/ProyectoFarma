/**
 * Middleware para validar si el usuario se encuentra logueado
 * @param {*} req De aca se obtiene el objeto del usuario
 * @param {*} res Acá se envía la respuesta
 * @param {*} next Funcion para que se ejecute el otro Middleware.
 */
module.exports = (req,res,next)=>{
    if(!req.user){
        return res.status(401).send({error: "You Must be logged in"})
    }

    next();
}