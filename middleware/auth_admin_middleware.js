const jwt = require('jsonwebtoken')
const Employee = require('../models/employee')
const Admin = require('../models/admin')

let auth_middleware = async (req, res, next) => {
    let token = req.header('Authorization')
    if (!token) {

        res.status(402).json({
            errors: [{
                msg: 'login firstttt toooooo'
            }]
        })
        return;
    }
    try {
        let {user_id} = jwt.verify(token, 'mysecret')

        const employee = await Admin.findById(user_id)
        if (!employee) {
            res.status(400).json({
                errors: [{
                    msg: 'invalid token'
                }]
            })
            return;
        }

        // if(!employee.admin){
        //     res.status(400).json({
        //         errors: [{
        //             msg: 'invalid token'
        //         }]
        //     })
        //     return;
        // }
        req.employee = employee
        // res.redirect('/admin')
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