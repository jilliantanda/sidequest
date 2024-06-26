const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT || 4000
const questsController = require('./controllers/quests.js')
const methodOverride = require("method-override")
const mongoURI = process.env.MONGOURI;

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(questsController)

async function connectToMongo(){
    try {
        await mongoose.connect(mongoURI)
    } catch (err){
            console.error(err)
    }
}

connectToMongo()


app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})