const expres =require('express') 
const Router = expres.Router()

const {      
    getMe,
    getNotification,
    getAllrecords,
    getRegister,
    postRegister,
    getRegisterOut,
    postRegisterOut} = require('../../controllers/user')

Router.get('/me' ,getMe)
Router.get('/getNotification' ,getNotification)
Router.get('/allrecords' ,getAllrecords)
Router.get('/register',getRegister)
Router.post('/register' ,postRegister)
Router.get('/registerOut' ,getRegisterOut)
Router.post('/registerOut' ,postRegisterOut)

module.exports = Router