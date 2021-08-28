const {check , validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const Employee = require('../models/employee');
const Admin = require('../models/admin');
const Conversation = require('../models/conversation');
const employee = require('../models/employee');



let signupController = async (req , res)=>{
    // console.log('ss')
    const errors = validationResult(req);    
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
        return;
    }
    try {
        const reservedUsername = await Admin.findOne({name : req.body.username}) 
                                 ||
                                 await Employee.findOne({name : req.body.username})
        if(reservedUsername){
            res.status(400).json({errors :[{username : 'this name is taken'}]})
            return;
        }
        const reservedEmail = await Employee.findOne({email : req.body.email})
        if(reservedEmail){
            res.status(400).json({errors :[{email : 'this email is already registered'}]})
            return;
        }
        console.log('8arebaaaaaaaaa==>')  

        const salt = await bcrypt.genSalt(10)
        const hash_basswaord = await bcrypt.hash(req.body.password , salt)
        const new_employee = new Employee({
            name : req.body.username,
            email : req.body.email,
            password : hash_basswaord,
            avatar: md5(req.body.email)

        })
        new_employee.notification.unshift({
            msg :'Welcome to our Company'
        })
         const employee = await new_employee.save();
       let conv = new Conversation({userOne:employee.id,userName:employee.name , avatar:employee.avatar})
       let see= await conv.save()
       console.log('seeee==>',see)  
       const token = jwt.sign({user_id: employee.id} , 'mysecret')
         
        res.status(201).json(token)
    } catch (error) {
        console.log('e /n  /////////////' , error)
        res.status(500).json({errors :[{msg :'server Error'}]})   
    }
    


}

let signupAdminController = async (req , res)=>{
    // console.log('ss')
    const errors = validationResult(req);    
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
        return;
    }
    try {
        const reservedUsername = await Admin.findOne({name : req.body.username}) 
                                 ||
                                 await Employee.findOne({name : req.body.username})
        
                                if(reservedUsername){
            res.status(400).json({errors :[{username : 'this name is taken'}]})
            return;
        }
        const reservedEmail = await Admin.findOne({email : req.body.email})
        if(reservedEmail){
            res.status(400).json({errors :[{email : 'this email is already registered'}]})
            return;
        }
        const salt = await bcrypt.genSalt(10)
        const hash_basswaord = await bcrypt.hash(req.body.password , salt)
        const new_employee = new Admin({
            name : req.body.username,
            email : req.body.email,
            password : hash_basswaord,
            avatar: md5(req.body.email)

        })
        
         const admin = await new_employee.save();
         const token = jwt.sign({user_id: admin.id} , 'mysecret')
        console.log('admin:',admin) 
        res.status(201).json(token)
    } catch (error) {
        console.log('e /n  /////////////' , error)
        res.status(500).json({errors :[{msg :'server Error'}]})   
    }
    


}

let loginController = async (req , res)=>{
    // console.log(req.body)
    const errors = validationResult(req);    
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
        return;
    }
    try {
        const reservedEmail =      await Employee.findOne({email : req.body.email}) 
                                || await Admin.findOne({email : req.body.email})

        if(!reservedEmail){
        
            res.status(400).json({errors :[{email : 'this email is not registered'}]})
            return;
        }
        const result = await bcrypt.compare(req.body.password , reservedEmail.password)
            if(!result){
                res.status(400).json({errors :[{password : 'wrong password'}]})          
                return ;
            }
            const token = jwt.sign({user_id: reservedEmail.id} , 'mysecret')

            res.status(200).json(token)


    } catch (error) {
        console.log('e /n  /////////////' , error)
        res.status(500).json('server error')   
    }
    
}

let signupValidator = [
    check('username', 'enter your user name').notEmpty().trim().escape(),
    check('email' ,'Email is not valid').isEmail().normalizeEmail(),
    check('password' ,'enter your password').notEmpty().isLength({min :8}),
    check('password2' , 'confirm password does not match').notEmpty().custom((val , {req})=>{
         if(val !== req.body.password){
             throw new Error()
         }
         return true;
    })
]
let signupAdminValidator = [
    check('username', 'enter your user name').notEmpty().trim().escape(),
    check('email' ,'Email is not valid').isEmail().normalizeEmail(),
    check('theKey' ,'the Key is not valid').notEmpty().equals('123456789'),
    check('password' ,'enter your password').notEmpty().isLength({min :8}),
    check('password2' , 'confirm password does not match').notEmpty().custom((val , {req})=>{
         if(val !== req.body.password){
             throw new Error()
         }
         return true;
    })
]
let loginValidator = [
    check('email' ,'Email is not valid').isEmail().normalizeEmail(),
    check('password' ,'enter your password').notEmpty()
]



module.exports={
    signupController,
    signupAdminController,
    signupValidator,
    signupAdminValidator,
    loginController,
    loginValidator
}