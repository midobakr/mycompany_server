const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    user_id :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'employee'
    },
    endpoint:{
        type:String
    },
    keys:{
        p256dh:{
            type:String
        },
        auth:{
            type:String
        }
    },

})
const subscription = mongoose.model('subscription' , schema);

module.exports = subscription ;