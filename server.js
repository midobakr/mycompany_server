const express = require('express');
const cors = require('cors')
const connectToDB = require('./database')
const userRouter = require('./router/user/user')
const authRouter = require('./router/auth/auth')
const conversationRouter = require('./router/conversation/conversation')
const auth_middleware =require('./middleware/auth_middleware')


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

app.use('/' , authRouter) 
app.use('/user' ,auth_middleware,userRouter )
app.use('/conversation' ,auth_middleware,conversationRouter )


app.listen(3333,'192.168.1.6',()=>{
    console.log('server is up on port')
    // console.log(new Date(1609933241006).toLocaleString())
    // console.log(new Date(1609933241006).toLocaleTimeString())
    // console.log(new Date('2020-01-01'))

    // console.log(new Date(1609933241006).toLocaleString('en' , {timeZone :'Egypt'}))
    connectToDB()
})