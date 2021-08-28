const expres =require('express') 

const {signupController , signupValidator ,loginController, 
        loginValidator , signupAdminValidator, signupAdminController} =require('../../controllers/auth')

const Router = expres.Router()

Router.post('/login',loginValidator,loginController)
Router.post('/signup' , signupValidator, signupController)
Router.post('/signup_admin' , signupAdminValidator, signupAdminController)


module.exports = Router

