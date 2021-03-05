const expres =require('express') 
const Router = expres.Router()

const Conversation = require('../../models/conversation')


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
    console.log('i am right there' , req.body)
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
         console.log('<<<<<<<<<<<<<<' ,myConversation,'>>>>>>>>>>>>>>>>>>>>')
         await myConversation.save()
         res.status(201).json(myConversation)   
    console.log('/conversation`',myConversation)
})


module.exports = Router