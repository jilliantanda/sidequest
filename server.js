const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 4000
const questsController = require('./controllers/quests.js')

const mongoURI = 'mongodb://127.0.0.1:27017/quests'

app.use(express.urlencoded({extended:true}));
// app.use(methodOverride('_method'))
app.use(questsController)

async function conntectToMongo(){
    try {
        await mongoose.connect(mongoURI)
    } catch (err){
            console.error(err)
    }
}

conntectToMongo()



app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})