const Path = require('path')
const Http = require('http')

const express = require('express');
const cors = require('cors')
const webpush = require('web-push')

const connectToDB = require('./database')
const adminRouter = require('./router/admin/admin')
const userRouter = require('./router/user/user')
const authRouter = require('./router/auth/auth')
const conversationRouter = require('./router/conversation/conversation')
const subscriptionRouter = require('./router/subscription/subscription')
const getStatus = require('./controllers/getStatus')
const guestController = require('./controllers/guest')
const auth_all_middleware = require('./middleware/auth_all_middleware')
const auth_middleware = require('./middleware/auth_middleware')
const auth_admin_middleware = require('./middleware/auth_admin_middleware')
const upload = require('./config/multer');
const configSocket = require('./config/socket');
 

const publicVapidKey = 'BGoYWF08O9yIeCH8ZB6jymtlhq54Wk8Lvit8i-UsMhJlh1el0UYiK0FsCTpQlM8wQ2G5ttLDzVNkByNZWtw-G4I';
const privateVapidKey = 'GO4peDNzM_8wMdDPFSHH8lfEm-xqXX6ZVsDyxtL07to';


const app = express();
const server = Http.createServer(app)
configSocket(server)

app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(cors());

app.use(express.static(Path.join(__dirname, 'public')));
app.use('/image',express.static(Path.join(__dirname, 'profile-pictures')));
app.use('/', authRouter)
app.use('/subscription', auth_all_middleware,subscriptionRouter)
app.use('/user', auth_middleware, userRouter) 
app.use('/conversation', auth_middleware, conversationRouter)
app.use('/dashboard', auth_admin_middleware, adminRouter)
app.get('/status', getStatus)
app.get('/image/:name',(req,res)=>{res.sendFile(Path.join(__dirname, 'profile-pictures','index.png'))}) 
app.get('/*', (req, res) => { res.sendFile(Path.join(__dirname, 'public', 'index.html'))}) 
app.post('/image',auth_all_middleware,upload.single('file'),(req,res)=>{res.status(200).json({saved: true})})
app.post('/guest',guestController)

webpush.setVapidDetails(
    'mailto:m7modbakr98@gmail.com',
    publicVapidKey, 
    privateVapidKey

)

// server.listen(3333, '192.168.1.8', () => {
    // server.listen(3333, () => {
server.listen(process.env.PORT,()=>{
    //    console.log('server is up on port : ',arr[arr.length-1].address)
       console.log('server is up on port : ',process.env.PORT)
    connectToDB()
 
})   