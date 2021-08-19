const expres = require('express')
const Mongoose = require('mongoose');
const webpush = require('web-push');
const Employee = require('../../models/employee')
const Conversation = require('../../models/conversation')
const Registerion = require('../../models/registeration')
const Subscription = require('../../models/subscription')
const conversation = require('../../models/conversation')
const Router = expres.Router()

Router.get('/me', (req, res) => {
    res.json(req.employee)
})

Router.get('/registeredUsers/:date', async (req, res) => {
    try {
        let date = new Date(req.params['date'])
        // console.log(req.params['date'])
        let firstDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 00)
        let lastDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 24)

        let today_record = await Registerion.find({
            AttendAt: {
                $gte: firstDay,
                $lte: lastDay
            }
        }).sort({
            name: 1
        })
        res.status(200).json(today_record)
    } catch (e) {
        res.status(400).json({
            errors: [{
                msg: 'there is Error !!'
            }]
        })
    }
})

Router.get('/allEmployees', async (req, res) => {
    const employees = await Employee.find({})
    res.json(employees)
})

Router.get('/getMyInbox', async (req, res) => {
    try {

        console.log('working')
        // const myInbox = await Conversation.find({}, ['userOne', 'lastUpdatedAt', 'avatar', 'userName'])
        const myInbox = await Conversation.find({}).slice('messages', -1)
            .sort({
                lastUpdatedAt: -1
            })

        res.json(myInbox)

    } catch (e) {
        console.log(e)
        res.status(400).json({
            errors: [{
                msg: 'sorry Error !!'
            }]
        })

    }
})
Router.get('/employee/:id', async (req, res) => {
    try {

        const employee = await Employee.findById(req.params['id'], 'name email avatar dateOfEmployment')
        const employeeHistory = await Registerion.find({
            user_id: Mongoose.Types.ObjectId(req.params['id'])
        })
        const employeeconversation = await conversation.findOne({
            userOne: Mongoose.Types.ObjectId(req.params['id'])
        })

        res.json({
            employee,
            history: employeeHistory,
            conversation: employeeconversation
        })
    } catch (e) {
        console.log(e)
        res.status(400).json({
            errors: [{
                msg: 'sorry Error !!'
            }]
        })

    }
})
Router.post('/send', async (req, res) => {
    let myConversation = await Conversation.findOne({
        userOne: req.body.id
    })
    if (myConversation) {
        myConversation.lastUpdatedAt = Date.now();
        myConversation.messages.push({
            from: req.employee.id,
            avatar: req.employee.avatar,
            content: req.body.theMessage,
            lastUpdatedAt: Date.now(),
            name: req.employee.name,

        })
    } else {
        myConversation = new Conversation({
            userOne: req.body.id,
            avatar: req.body.avatar,
            userName: req.body.name,
            messages: [{
                from: req.employee.id,
                name: req.employee.name,
                avatar: req.employee.avatar,
                content: req.body.theMessage
            }]
        })
    }
    myConversation.EmployeeUnseenMSGS += 1
    console.log('myConversation.EmployeeUnseenMSGS=>', myConversation.EmployeeUnseenMSGS)
    await myConversation.save()

    res.status(201).json(myConversation)

    // const employee= await Employee.findById(req.body.id)
    // employee.newNotifications +=1;
    // await employee.save()
    // console.log('-------------------------------------')
    // console.log(employee.newNotifications)

    let employeeSubscriptions = await Subscription.findOne({
        user_id: req.body.id
    })
    console.log('admins', employeeSubscriptions)
    if (employeeSubscriptions) {
        webpush.sendNotification(
            employeeSubscriptions,
            JSON.stringify({
                title: `the manger ${req.employee.name} sent a message`,
                body: req.body.theMessage,
                tag: `conversation${req.employee.id}`
            }))
    }

})
Router.get('/myChat/:id', async (req, res) => {
    let myConversation = await Conversation.findOne({
        userOne: req.params['id']
    })
    res.status(201).json(myConversation)
    myConversation.MangerUnseenMSGS = 0
    myConversation.save()
})



Router.get('/unSeenMSGs', async (req, res) => {
    let records = await Conversation.find({}, ['MangerUnseenMSGS'])
    let allUnseenMSGS = 0
    records.forEach((record) => {
        allUnseenMSGS += record.MangerUnseenMSGS
    })
    console.log('adminUnSeenMSGs:', allUnseenMSGS)
    res.json(allUnseenMSGS)
})
module.exports = Router