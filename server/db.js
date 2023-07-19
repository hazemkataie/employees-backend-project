const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://admin:123123123@cluster0.plas4qd.mongodb.net/employee_db?retryWrites=true&w=majority'

mongoose.set('strictQuery',false)
module.exports = ()=> {
    return mongoose.connect(dbUri, 
        {useNewUrlParser: true, useUnifiedTopology: true})
}