const jwt = require('jsonwebtoken')
const Employee = require('../models/employee')
const Admin = require('../models/admin')

let getStatus = async (req, res) => {
    let token = req.header('Authorization')
    if (!token) {

        res.status(402).json({
            errors: [{
                msg: 'login first'
            }]
        })
        return;
    }
    try {
        let {user_id} = jwt.verify(token, 'mysecret')
        const employee = await Employee.findById(user_id)
        if (employee) {
            res.json({
                status: 'employee'
            })
            return;
        }
        const admin = await Admin.findById(user_id)
        if (admin) {
            res.json({
                status: 'admin'
            })
            return;
        }


        res.status(400).json({
            errors: [{
                msg: 'invalid token'
            }]
        })

    }catch (error) {
        console.log('error in getStatus', error)
        res.status(400).json({
            errors: [{
                msg: 'invalid token'
            }]
        })
        return;

    }
}


module.exports = getStatus