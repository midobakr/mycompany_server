const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userOne :{ 
            type:mongoose.Schema.Types.ObjectId,
            ref:'employee'
      
    },
    lastUpdatedAt:{
        type:Date,
        default:Date.now()
    },
    avatar :{
        type :String
    },
    EmployeeUnseenMSGS :{
        type :Number,
        default:0
    },
    MangerUnseenMSGS :{
        type :Number,
        default:0
    },
    userName :{
        type :String 
    },
    
    messages :[{
        from:{ 
            type:String
        },
        name:{
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