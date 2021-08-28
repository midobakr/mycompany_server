const expres =require('express') 
const webpush =require('web-push') 
const Router = expres.Router()

const Conversation = require('../models/conversation')
const Employee = require('../models/employee')
const Admin = require('../models/admin')
const Subscription = require('../models/subscription')


 const  getConversation = async (req ,res)=>{
    let myConversation =await Conversation.findOne({userOne:req.employee.id })
   if(myConversation ==null){
        res.status(400).json({errors :[{msg : 'no messages'}]})          
        return;
    }
    myConversation.EmployeeUnseenMSGS = 0
    res.status(200).json(myConversation)
    myConversation.save()
}

const getUnSeenMSGs = async (req ,res)=>{
    let myConversation =await Conversation.findOne({userOne:req.employee.id})
    if(!myConversation.EmployeeUnseenMSGS){
        myConversation.EmployeeUnseenMSGS = 0
    }
    res.json(myConversation.EmployeeUnseenMSGS)
}

const postSend = async (req ,res)=>{
    let myConversation =await Conversation.findOne({userOne:req.employee.id})
        myConversation.lastUpdatedAt=Date.now();
         myConversation.messages.push({
            from:req.employee.id,
            avatar:req.employee.avatar,
            content:req.body.theMessage,
            name :req.employee.name
         })
          myConversation.MangerUnseenMSGS +=1;
        
         await myConversation.save()
         res.status(201).json(myConversation)   

         let admins = await Admin.find({}).select('_id')
         let adminsSubscriptions =await Subscription.find({user_id:{$in : admins}})
        
          adminsSubscriptions.forEach((sub) => {
             webpush.sendNotification(
                 sub,
                 JSON.stringify({
                     title: `${req.employee.name} sent a message`,
                     body: req.body.theMessage,
                     tag : `conversation${req.employee.id}`                
                 }))
     
         })
}


module.exports = {
    getConversation,
    getUnSeenMSGs,
    postSend
}