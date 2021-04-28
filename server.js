const OS = require('os')
const Path = require('path')
const express = require('express');
const cors = require('cors')
const webpush = require('web-push')
const connectToDB = require('./database')
const adminRouter = require('./router/admin/admin')
const userRouter = require('./router/user/user')
const authRouter = require('./router/auth/auth')
const conversationRouter = require('./router/conversation/conversation')
const subscriptionRouter = require('./router/subscription/subscription')
const auth_middleware =require('./middleware/auth_middleware')
const auth_admin_middleware =require('./middleware/auth_admin_middleware')

const networkInterfaces = OS.networkInterfaces();
const arr = networkInterfaces.WiFi

const publicVapidKey = 'BGoYWF08O9yIeCH8ZB6jymtlhq54Wk8Lvit8i-UsMhJlh1el0UYiK0FsCTpQlM8wQ2G5ttLDzVNkByNZWtw-G4I';
const privateVapidKey = 'GO4peDNzM_8wMdDPFSHH8lfEm-xqXX6ZVsDyxtL07to';


const app = express(); 

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.static(Path.join(__dirname,'public' ,'build')));
app.get('/1234',(req,res )=>{
     res.json({ff: req.ip})
    
})
app.use('/' , authRouter) 
app.use('/subscription' ,auth_middleware, subscriptionRouter)
app.use('/user' ,auth_middleware,userRouter )
app.use('/conversation' ,auth_middleware,conversationRouter )
app.use('/dashboard' ,auth_admin_middleware,adminRouter)
app.get('/*',(req , res)=>{

    res.sendFile(Path.join(__dirname,'public' ,'build' , 'index.html'))
})
webpush.setVapidDetails(
    'mailto:m7modbakr98@gmail.com',
    publicVapidKey,
    privateVapidKey

) 

// app.listen(3333,()=>{
app.listen(3333,arr[arr.length-1].address,()=>{
//   app.listen(process.env.PORT,()=>{
   console.log('server is up on port : ',arr[arr.length-1].address)
//    console.log('server is up on port : ',process.env.PORT)
  
    connectToDB()
})   