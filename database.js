const mongoose = require('mongoose');

let connectToDB = async ()=>{
    try{
       await mongoose.connect("mongodb+srv://m7mod:7oda1998@cluster0.ncttp.mongodb.net/myCompany?retryWrites=true&w=majority",
       { useNewUrlParser: true,useUnifiedTopology: true })
        console.log('database connected')
    }catch(e){
        console.error('database error' , e)
        process.exit(1)

    }
}

module.exports = connectToDB  