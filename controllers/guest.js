const {check , validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const Employee = require('../models/employee');
const Admin = require('../models/admin');
const Conversation = require('../models/conversation');
const employee = require('../models/employee');


let signupController = async (req , res)=>{
    try {
       if(req.body.as ==='employee'){

               let name = 'guest' + Math.round(Math.random()*10000000)
               const new_employee = new Employee({
                       name : name,
                       email : name+'@gmail.com',
                       password : 'password',
                   })
               
                   const employee = await new_employee.save();
                  let conv = new Conversation({userOne:employee.id,userName:employee.name})
                  let see= await conv.save()
                  console.log('seeee==>',see)  
                  const token = jwt.sign({user_id: employee.id} , 'mysecret')
               
               res.status(201).json(token)
            }else if(req.body.as ==='admin'){
                let name = 'guest' + Math.round(Math.random()*10000000)
                const new_employee = new Admin({
                    name : name,
                    email : name+'@gmail.com',
                    password : 'password',
                })
                
                const employee = await new_employee.save();
                const token = jwt.sign({user_id: employee.id} , 'mysecret')
                res.status(201).json(token)
               
                }
    } catch (error) {
        console.log('error in guest controller' , error)
        res.status(500).json({errors :[{msg :'server Error'}]})   
    }
    


}
module.exports = signupController