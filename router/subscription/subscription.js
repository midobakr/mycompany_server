const expres =require('express') 
const webpush = require('web-push')
const Router = expres.Router()

const Subscription = require('../../models/subscription')


Router.post('/' ,async (req ,res)=>{
    // console.log('i am right here in subscription')
    try{
      //TD check if there is same subscription before create new one
      let userSubscription = await Subscription.find({user_id : req.employee.id , keys:req.body.keys})
        // console.log(userSubscription)
        // console.log(userSubscription[0])
      if(!userSubscription[0]){
                userSubscription = new Subscription({
                    user_id : req.employee.id,
                    ...req.body
                })
          await userSubscription.save()

        }
        
     await  webpush.sendNotification(userSubscription , JSON.stringify({title : 'it is working' , tag:'in'}))
    }catch(e){
        // console.log(e)
    }
    res.send('') 
})

Router.delete('/' ,async (req ,res)=>{
    // console.log('i am right here in subscription')
    try{
      let userSubscription = await Subscription.deleteOne({user_id : req.employee.id , keys:req.body.keys})  
      let cv =    await  webpush.sendNotification(req.body , JSON.stringify({title : 'delete is working',
       tag:'in'}))
      res.send('400')

    }catch(e){
        // console.log(e)
    }
})

module.exports = Router