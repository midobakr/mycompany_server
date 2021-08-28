const expres = require('express')
const Mongoose = require('mongoose');
const webpush = require('web-push');

const Employee = require('../models/employee')
const Conversation = require('../models/conversation')
const Registerion = require('../models/registeration')
const Subscription = require('../models/subscription')
const conversation = require('../models/conversation')
const Router = expres.Router()

const getMe = (req, res) => {
    res.json(req.employee)
}

const getRegisteredUsers = async (req, res) => {
    try {
        let date = new Date(req.params['date'])
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
}

const getAllEmployees =  async (req, res) => {
    try {
        const employees = await Employee.find({})
        res.json(employees)
    } catch (e) {
        console.log(e)
        res.status(400).json({
            errors: [{
                msg: 'sorry Error !!'
            }]
        })

    }
}

const getGetMyInbox =  async (req, res) => {
    try {
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
}

const getEmployee = async (req, res) => {
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
}

const postSend = async (req, res) => {
    try {
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
            myConversation.EmployeeUnseenMSGS += 1
            await myConversation.save()
        }

        res.status(201).json(myConversation)

        let employeeSubscriptions = await Subscription.find({
            user_id: req.body.id
        })
        if (employeeSubscriptions) {
            employeeSubscriptions.forEach((Subscription) => {
                webpush.sendNotification(
                    Subscription,
                    JSON.stringify({
                        title: `the manger ${req.employee.name} sent a message`,
                        body: req.body.theMessage,
                        tag: `conversation${req.employee.id}`
                    }))
            })
        }

    } catch (e) {
        console.log(e)
        res.status(400).json({
            errors: [{
                msg: 'sorry Error !!'
            }]
        })

    }
}

const getMyChat = async (req, res) => {
    try {
        let myConversation = await Conversation.findOne({
            userOne: req.params['id']
        })
        res.status(201).json(myConversation)
        myConversation.MangerUnseenMSGS = 0
        myConversation.save()
    } catch (e) {
        console.log(e)
        res.status(400).json({
            errors: [{
                msg: 'sorry Error !!'
            }]
        })

    }
}



const getUnSeenMSGs = async (req, res) => {
    try {
        let records = await Conversation.find({}, ['MangerUnseenMSGS'])
        let allUnseenMSGS = 0
        records.forEach((record) => {
            allUnseenMSGS += record.MangerUnseenMSGS
        })
        res.json(allUnseenMSGS)
    } catch (e) {
        console.log(e)
        res.status(400).json({
            errors: [{
                msg: 'sorry Error !!'
            }]
        })

    }
}

module.exports={
    getMe,
    getAllEmployees,
    getEmployee,
    getGetMyInbox,
    getMyChat,
    getRegisteredUsers,
    getUnSeenMSGs,
    postSend
}