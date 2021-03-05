const expres =require('express') 
const webpush = require('web-push')
const Router = expres.Router()

const Subscription = require('../../models/subscription')


Router.post('/' ,async (req ,res)=>{
    console.log('i am right here in subscription')
    try{
      // let userSubscription = await Subscription.findOne({user_id : req.employee.id})  
      // if(userSubscription ===null){
        let userSubscription = new Subscription({
              user_id : req.employee.id,
              ...req.body
          })
          await userSubscription.save()
        // }
        console.log(req.body)
        console.log('////////////////')
        console.log(userSubscription)
     await  webpush.sendNotification(userSubscription , JSON.stringify({title : 'it is working'}))
    //  await  webpush.sendNotification(req.body , JSON.stringify({title : 'it is working'}))
    }catch(e){
        console.log(e)
    }
    res.send('') 
})

Router.delete('/' ,async (req ,res)=>{
    console.log('i am right here in subscription')
    try{
      let userSubscription = await Subscription.deleteOne({user_id : req.employee.id , keys:req.body.keys})  
      // if(userSubscription ===null){
        //  userSubscription = new Subscription({
        //       user_id : req.employee.id,
        //       ...req.body
        //   }) 
          // await userSubscription.de
        // }
        console.log(userSubscription)
        console.log('////////////////')

        console.log(req.body)
        // console.log(userSubscription)
    //  await           webpush.sendNotification(userSubscription , JSON.stringify({title : 'it is working'}))
     let cv =    await  webpush.sendNotification(req.body , JSON.stringify({title : 'delete is working'}))
          console.log('cv :' , cv)
          console.log('cv :kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk' )
    res.send('')

    }catch(e){
        console.log(e)
    }
})

module.exports = Router