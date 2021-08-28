const expres = require('express')
const Router = expres.Router()

const {
    getMe,
    getAllEmployees,
    getEmployee,
    getGetMyInbox,
    getMyChat,
    getRegisteredUsers,
    getUnSeenMSGs,
    postSend
} = require('../../controllers/admin')


Router.get('/me', getMe)
Router.get('/registeredUsers/:date', getRegisteredUsers)
Router.get('/allEmployees', getAllEmployees)
Router.get('/getMyInbox', getGetMyInbox)
Router.get('/employee/:id', getEmployee)
Router.get('/myChat/:id', getMyChat)
Router.get('/unSeenMSGs', getUnSeenMSGs)
Router.post('/send', postSend)



module.exports = Router