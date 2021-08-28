const expres =require('express') 
const webpush = require('web-push')
const Router = expres.Router()
const Subscription = require('../models/subscription')


const postSubscription = async (req ,res)=>{
    try{
      let userSubscription = await Subscription.find({user_id : req.employee.id , keys:req.body.keys})
        if(!userSubscription[0]){
                userSubscription = new Subscription({
                    user_id : req.employee.id,
                    ...req.body
                })
          await userSubscription.save()

        }
        
            await  webpush.sendNotification(userSubscription , JSON.stringify({title : 'it is working' , tag:'in'}))
    }catch(e){
        console.log('gggggggggggggg' , e)
    }
    res.send('') 
}

const deleteSubscription = async (req ,res)=>{
    try{
      let userSubscription = await Subscription.deleteOne({user_id : req.employee.id , keys:req.body.keys})  
      res.send('400')
   

    }catch(e){ 
        res.json({msg :'err'})
    }
}

module.exports = {
    postSubscription,
    deleteSubscription
}