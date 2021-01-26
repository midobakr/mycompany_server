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
Router.get('/allEmployees' ,async (req,res)=>{
    const employees = await Employee.find({})
    console.log('60083f88b8cd731c284d0c45')
    console.log(ObjectId())
    // console.log(ObjectId({id :'60083f88b8cd731c284d0c45'}))
    console.log(new ObjectId('60083f88b8cd731c284d0c45'))
    
    console.log(Mongoose.Types.ObjectId.isValid('60083f88b8cd731c284d0c45'))
    console.log( Mongoose.Types.ObjectId('60083f88b8cd731c284d0c45'))

    console.log(employees[0].id)
    res.json(employees)
})
Router.get('/employee/:id' ,async (req,res)=>{
    try{

        const employee = await Employee.findById(req.params['id'] ,'name email avatar dateOfEmployment')
        const employeeHistory = await Registerion.find({user_id: Mongoose.Types.ObjectId(req.params['id'])})
        const employeeconversation = await conversation.findOne({userOne : Mongoose.Types.ObjectId(req.params['id'])})
        // console.log('kjbhvjkpl[l[/////////////' ,employeeconversation)
        console.log('kjbhvjkpl[l[/////////////' ,employeeHistory)
        console.log(req.params['id'])
 
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

