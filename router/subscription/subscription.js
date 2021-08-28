const expres = require('express')
const Router = expres.Router()


const {postSubscription,deleteSubscription} = require('../../controllers/subscription')


Router.post('/', postSubscription)

Router.delete('/', deleteSubscription)

module.exports = Router