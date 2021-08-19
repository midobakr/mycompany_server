const Path = require('path')
const Http = require('http')

const express = require('express');
const cors = require('cors')
const webpush = require('web-push')
const socketio = require('socket.io')

const connectToDB = require('./database')
const adminRouter = require('./router/admin/admin')
const userRouter = require('./router/user/user')
const authRouter = require('./router/auth/auth')
const conversationRouter = require('./router/conversation/conversation')
const subscriptionRouter = require('./router/subscription/subscription')
const auth_middleware = require('./middleware/auth_middleware')
const auth_admin_middleware = require('./middleware/auth_admin_middleware')
const Employee = require('./models/employee')



const publicVapidKey = 'BGoYWF08O9yIeCH8ZB6jymtlhq54Wk8Lvit8i-UsMhJlh1el0UYiK0FsCTpQlM8wQ2G5ttLDzVNkByNZWtw-G4I';
const privateVapidKey = 'GO4peDNzM_8wMdDPFSHH8lfEm-xqXX6ZVsDyxtL07to';

let admins = [];
Employee.find({admin: true}).select('_id').then(result=>{admins = result} )

const app = express();
const server = Http.createServer(app)
const io = socketio(server, {
    cors: {
        origin: ["http://192.168.1.6:3000", "http://localhost:3000",'http://192.168.1.8:3333','http://192.168.1.8:3000'],
    }
})

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.static(Path.join(__dirname, 'public', 'build')));
app.get('/1234', (req, res) => {res.json({ff: req.ip})})
app.use('/', authRouter)
app.use('/subscription', auth_middleware, subscriptionRouter)
app.use('/user', auth_middleware, userRouter)
app.use('/conversation', auth_middleware, conversationRouter)
app.use('/dashboard', auth_admin_middleware, adminRouter)
app.get('/*', (req, res) => {

    res.sendFile(Path.join(__dirname, 'public', 'build', 'index.html'))
})
webpush.setVapidDetails(
    'mailto:m7modbakr98@gmail.com',
    publicVapidKey,
    privateVapidKey

)
let onlineUsers = new Map();
io.on('connection', socket => {
    console.log('num :',io.sockets.adapter.rooms)
    
    const user_id = socket.handshake.query.userId
    if (onlineUsers.has(user_id)) {
        let arr = onlineUsers.get(user_id)
        arr.push(socket.id)
        onlineUsers.set(user_id, arr)
    } else { 
        onlineUsers.set(user_id, [socket.id])
    } 

    socket.on('send_message_to_employee' , (theReciever)=>{
            socket.to(onlineUsers.get(theReciever.to)).emit('recieve_message_from_admin',theReciever);
            theReciever.fromMe=true
            socket.emit('recieve_message',theReciever);
            console.log('send_message_to_employee')
    })
    
    socket.on('send_message_to_admins' ,(theReciever)=>{
        admins.forEach(Admin => {
            socket.to(onlineUsers.get(`${Admin._id}`)).emit('recieve_message',theReciever);
            theReciever.fromMe=true
            socket.emit('recieve_message_from_admin',theReciever);
            });
            console.log('send_message_to_admins')
    })
 
    console.log('my rooms' , onlineUsers)

    socket.on('disconnect', () => { 
        let arr = onlineUsers.get(user_id)
        arr = arr.filter(v => socket.id !== v)
        if (arr[0]) {
            onlineUsers.set(user_id, arr)
        } else {
            onlineUsers.delete(user_id)
        } 
        console.log('disconnect', onlineUsers)
    }) 
    // console.log('connect', onlineUsers)
    
    // console.log('num :', socket.eventNames())
})

// server.listen(3333, '192.168.1.8', () => {
    // server.listen(3333, () => {
server.listen(process.env.PORT,()=>{
    //    console.log('server is up on port : ',arr[arr.length-1].address)
    //    console.log('server is up on port : ',process.env.PORT)
    connectToDB()

})  