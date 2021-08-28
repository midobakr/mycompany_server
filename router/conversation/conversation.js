const expres = require('express')
const Router = expres.Router()

const {
    getConversation,
    getUnSeenMSGs,
    postSend
} = require('../../controllers/conversation')

Router.get('/', getConversation)
Router.get('/unSeenMSGs', getUnSeenMSGs)
Router.post('/send', postSend)


module.exports = Router