const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name :{
        type :String ,
        required :true
    },
    email:{
        type : String,
        required: true,
        unique : true
    },
    password :{
        type : String ,
        required : true
    },
    avatar :{
        type :String
    },
    dateOfEmployment :{
        type : Date,
        default : Date.now
    },
    notification :[{

        date :{
            type : Date,
            default: Date.now
        },
        msg:{
            type:String,
            required : true
        }

    }], 
    newNotifications :{
        type : Number,
        default :0
    }

    
})

const admin = mongoose.model('admin' , schema);

module.exports = admin;