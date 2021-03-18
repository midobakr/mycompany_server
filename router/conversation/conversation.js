const expres =require('express') 
const webpush =require('web-push') 
const Router = expres.Router()

const Conversation = require('../../models/conversation')
const Employee = require('../../models/employee')
const Subscription = require('../../models/subscription')


Router.get('/' ,async (req ,res)=>{
    console.log('i am right here')
    let myConversations =await Conversation.findOne({userOne:req.employee.id })
    console.log('/conversation`',myConversations)
    if(myConversations ==null){
        res.status(400).json({errors :[{msg : 'no messages'}]})          
        return;
    }
    res.status(200).json(myConversations)
})

Router.post('/send' ,async (req ,res)=>{
    let myConversation =await Conversation.findOne({ $or: [ 
         {userOne:req.employee.id},
         {userTwo:req.employee.id} 
        ]})
     if(myConversation){
         myConversation.lastUpdatedAt=Date.now();
         myConversation.messages.push({
            from:req.employee.id,
            avatar:req.employee.avatar,
            content:req.body.theMessage,
            name :req.employee.name
         })}else{
          myConversation = new Conversation({
            userOne :req.employee.id,
            avatar:req.employee.avatar,
            name :req.employee.name,
            messages :[{
                from:req.employee.id,
                userName :req.employee.name,
                avatar:req.employee.avatar,
                content:req.body.theMessage
             }]
          }) 
         }
         await myConversation.save()
         res.status(201).json(myConversation)   

         let admins = await Employee.find({admin: true}).select('_id')
         let adminsSubscriptions =await Subscription.find({user_id:{$in : admins}})
        console.log('admins' , adminsSubscriptions  )
          adminsSubscriptions.forEach((sub) => {
             webpush.sendNotification(
                 sub,
                 JSON.stringify({
                     title: `${req.employee.name} sent a message`,
                     body: req.body.theMessage,
                     tag : `conversation${req.employee.id}`                
                 }))
     
         })
})


module.exports = Router