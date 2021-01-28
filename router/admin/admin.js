const expres =require('express') 
const  ObjectId = require('mongodb').ObjectId; 
var Mongoose = require('mongoose');
const Employee = require('../../models/employee')
const Registerion = require('../../models/registeration')
const conversation = require('../../models/conversation')
const Router = expres.Router()


Router.get('/me' ,(req,res)=>{
    res.json(req.employee)
})

Router.get('/registeredUsers' ,async (req,res)=>{
    let date = new Date()
    let firstDay = new Date(date.getFullYear(),date.getMonth(),date.getDate(),00)
    let lastDay  = new Date(date.getFullYear(),date.getMonth(),date.getDate(),24)
    
    let today_record =await Registerion.find({AttendAt:{$gte:firstDay,$lte:lastDay}})
    if(today_record[0]){
        res.status(200).json(today_record)
        return;
    }
    res.status(400).json({errors :[{msg : 'there is no Users registered yet !!'}]})})

Router.get('/allEmployees' ,async (req,res)=>{
    const employees = await Employee.find({})    
    res.json(employees)
})
Router.get('/employee/:id' ,async (req,res)=>{
    try{

        const employee = await Employee.findById(req.params['id'] ,'name email avatar dateOfEmployment')
        const employeeHistory = await Registerion.find({user_id: Mongoose.Types.ObjectId(req.params['id'])})
        const employeeconversation = await conversation.findOne({userOne : Mongoose.Types.ObjectId(req.params['id'])})
   
        res.json({
            employee,
            history : employeeHistory,
            conversation : employeeconversation 
        })
    }catch(e){
        console.log(e)
        res.status(400).json({errors :[{msg : 'sorry Error !!'}]})


    }
})



module.exports = Router

