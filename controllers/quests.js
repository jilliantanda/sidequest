const express = require('express')
const router = express.Router()
const Quest = require('../models/quests.js')

router.get('/', async (req, res) => {
    const allQuests = await Quest.find({})
    res.render('index.ejs')
})

module.exports = router;