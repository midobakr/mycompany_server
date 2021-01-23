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
    attendance :{
        type :String,
        default :'false'
    },
    admin:{
        type:Boolean ,
        default : false
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

    }]

})
const employee = mongoose.model('employee' , schema);

module.exports = employee ;