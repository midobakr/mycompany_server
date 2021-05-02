const jwt = require('jsonwebtoken')
const Employee = require('../models/employee')

let auth_middleware = async (req, res, next) => {
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
        // console.log('token==>', token)
        let {user_id} = jwt.verify(token, 'mysecret')
        // console.log('user_id==>', user_id)
        const employee = await Employee.findById(user_id)
        if (!employee) {
            res.status(400).json({
                errors: [{
                    msg: 'invalid token'
                }]
            })
            return;
        }
        req.employee = employee
        next()
    } catch (error) {
        console.log('error in auth middlerware', error)
        res.status(400).json({
            errors: [{
                msg: 'invalid token'
            }]
        })
        return;

    }
}


module.exports = auth_middleware