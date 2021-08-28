const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        cb(null, 'profile-pictures')
    },
    filename: function (req, file, cb) {
        cb(null, req.employee.name + '.png')
    }
})
function fileFilter (req, file, cb) {
    if(file.mimetype ==='image/jpeg' ||file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
        cb(null, true)
    }else{
        cb(null, false) 
    }     
}
const  upload = multer({storage , fileFilter , limits:{fileSize:6000000}}) 
 module.exports = upload