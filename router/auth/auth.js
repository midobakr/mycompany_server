const expres =require('express') 

const auth_middleware = require('../../middleware/auth_middleware')
const {signupController , signupValidator ,loginController, 
        loginValidator} =require('../../controllers/auth/auth')

const Router = expres.Router()

Router.post('/login',loginValidator,loginController)
Router.post('/signup' , signupValidator, signupController)


module.exports = Router

