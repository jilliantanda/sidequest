const express = require("express");
const router = express.Router();
const Quest = require("../models/quests.js");

// index
router.get("/", async (req, res) => {
  res.render("welcome.ejs");
});

router.get("/questlog/", async (req, res) => {
  const allQuests = await Quest.find({});
  res.render("index.ejs", {
    quests: allQuests,
  });
});

// new
router.get("/newquest/", (req, res) => {
  res.render("new.ejs");
});

// delete
router.delete("/questlog/:id", async (req, res) => {
  try {
    await Quest.findByIdAndDelete(req.params.id);
    res.redirect("/questlog");
  } catch (err) {
    console.error(err);
  }
});

// update
router.put("/questlog/:id", async (req, res) => {
  if (req.body.isCompleted === "on") {
    req.body.isCompleted = true;
  } else {
    req.body.isCompleted = false;
  }
  try {
    const updatedQuest = await Quest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.redirect("/questlog");
  } catch (err) {
    console.error(err);
  }
});


// create
router.post("/questlog/", async (req, res) => {
  if (req.body.isCompleted === "on") {
    req.body.isCompleted = true;
  } else {
    req.body.isCompleted = false;
  }
  try {
    const createdQuest = await Quest.create(req.body);
    res.redirect("/questlog/");
  } catch (err) {
    console.error(err);
  }
});

// edit
router.get('/questlog/:id/edit', async (req, res) => {
    try {
        const foundQuest = await Quest.findById(req.params.id)
        res.render("edit.ejs", {
            quest: foundQuest,
        })
    } catch (err){
        console.error(err)
    }
})
// show
router.get("/questlog/:id", async (req, res) => {
  const showQuest = await Quest.findById(req.params.id);
  res.render("show.ejs", {
    quest: showQuest,
  });
});

module.exports = router;
