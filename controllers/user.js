// const expres =require('express') 
// const Router = expres.Router()

const Attend = require('../models/registeration') 

const getMe = (req ,res)=>{
    res.json(req.employee)
}
const getNotification = (req ,res)=>{
    console.log('getNotification' , req.employee)
    res.json(req.employee.notification)
}

const getAllrecords = async (req ,res)=>{
    
    let records =await Attend.find({user_id:req.employee.id}).sort({ AttendAt: -1 })
    if(records){
        res.status(200).json(records)
        return;
    }
    res.status(400).json({errors :[{msg : 'you are not registered yet !!'}]})

}
const getRegister =  async(req ,res)=>{
        let date = new Date()
        let firstDay = new Date(date.getFullYear(),date.getMonth(),date.getDate(),00)
        let lastDay  = new Date(date.getFullYear(),date.getMonth(),date.getDate(),24)
        
        let today_record =await Attend.findOne({user_id:req.employee.id,AttendAt:{$gte:firstDay,$lte:lastDay}})
        if(today_record){
            res.status(200).json(today_record)
            return;
        }
        res.status(400).json({errors :[{msg : 'you are not registered yet !!'}]})

}

const postRegister = async (req ,res)=>{
    try{
        let date = new Date()
        let firstDay = new Date(date.getFullYear(),date.getMonth(),date.getDate(),00)
        let lastDay  = new Date(date.getFullYear(),date.getMonth(),date.getDate(),24)
  
        let today_record =await Attend.findOne({user_id:req.employee.id,AttendAt :{$gte:firstDay,$lte:lastDay}})
        if(today_record){
            res.status(400).json({errors :[{msg : 'you already registered today'}]})
            return;
        }
    today_record = new Attend({
        user_id : req.employee.id, 
        name : req.employee.name,
        avatar :req.employee.avatar,
        AttendAt : new Date()
    })
        let done = await  today_record.save()
        req.employee.notification.unshift({
            msg :'you are registerd today'
        })
        req.employee.save()
        res.status(200).json(done) 
   
}catch(e){
    res.status(400).json({errors :[{msg :'error happened'}]})
}
}
 const getRegisterOut = async(req ,res)=>{
        let date = new Date()
        let firstDay = new Date(date.getFullYear(),date.getMonth(),date.getDate(),00)
        let lastDay  = new Date(date.getFullYear(),date.getMonth(),date.getDate(),24)
        
        let today_record =await Attend.findOne({user_id:req.employee.id,LeftAt:{$gte:firstDay,$lte:lastDay}})
        if(today_record){
            res.status(200).json(today_record)
            return;
        }
        res.status(400).json({errors :[{msg : 'you are not registered out yet !!'}]})

}

 const postRegisterOut = async  (req ,res)=>{
    try{
        let date = new Date()
        let firstDay = new Date(date.getFullYear(),date.getMonth(),date.getDate(),00)
        let lastDay  = new Date(date.getFullYear(),date.getMonth(),date.getDate(),24)
 
        let today_record =await Attend.findOne({user_id:req.employee.id,AttendAt :{$gte:firstDay,$lte:lastDay}})
        if(!today_record){
            res.status(400).json({errors :[{msg : 'you are not registered today'}]})
            return;
        }
        
    today_record.LeftAt =new Date() 
        let done = await  today_record.save()
        req.employee.notification.unshift({
            msg :'you are registerd out today'
        })
        req.employee.save()
        res.status(200).json(done) 
        
}catch(e){
    console.log('eeeeeeee',e)
    res.status(400).json({errors :[{msg :'error happened'}]})

}
}



module.exports={
    getMe,
    getNotification,
    getAllrecords,
    getRegister,
    postRegister,
    getRegisterOut,
    postRegisterOut,
}