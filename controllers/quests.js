const express = require('express')
const router = express.Router()
const Quest = require('../models/quests.js')

router.get('/', async (req, res) => {
    res.render('welcome.ejs')
})

router.get('/questlog/', async (req, res) => {
        const allQuests = await Quest.find({})
    res.render('index.ejs', {
        quests: allQuests
    })
})

router.get('/newquest/', (req, res) => {
    res.render('new.ejs')
})

router.put('/:id', async (req, res) => {
    if(req.body.isCompleted === "on"){
        req.body.isCompleted = true
    } else {
        req.body.isCompleted = false
    } try {
        const updatedQuest = await Quest.findByIdandUpdate(req.params.id, req.body, { new: true })
        res.redirect('/questlog/')
    } catch (err) {
        console.error(err)
    }
})

router.post('/questlog/', async (req, res) => {
    if(req.body.isCompleted === "on"){
        req.body.isCompleted = true
    } else {
        req.body.isCompleted = false
    } try {
        const createdQuest = await Quest.create(req.body)
        res.redirect('/questlog/')
    } catch (err) {
        console.error(err)
    }
})
module.exports = router;