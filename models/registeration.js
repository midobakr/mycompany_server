const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    user_id :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'employee'
    }
    ,name :{
        type :String ,
        required :true
    },
    avatart :{
        type :String
    },
    AttendAt :{
        type : Date,
        default : Date.now
    },
    LeftAt :{
        type : Date
    },


})
const attend = mongoose.model('attend' , schema);

module.exports = attend ;