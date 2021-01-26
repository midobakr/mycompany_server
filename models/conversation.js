const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userOne :{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Employee'
      
    },
    lastUpdatedAt:{
        type:Date,
        default:Date.now()
    },
    
    messages :[{
        from:{
            type:String
        },
        avatar:{
            type:String
        },
        date:{
            type:Date,
            default:Date.now()
        },
        content:{
            type:String
        }
    }]

})
const conversation = mongoose.model('conversation' , schema);

module.exports = conversation ;