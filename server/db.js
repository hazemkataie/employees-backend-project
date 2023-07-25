const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://<username>:<password>@cluster0.plas4qd.mongodb.net/<database-name>?retryWrites=true&w=majority'

mongoose.set('strictQuery',false)
module.exports = ()=> {
    return mongoose.connect(dbUri, 
        {useNewUrlParser: true, useUnifiedTopology: true})
}
