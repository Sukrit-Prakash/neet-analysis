// routes/quizroute.js
const express = require("express");
const fetchQuizData = require("../data/fetchQuizData");
const extractQuizDetails = require("../analysis/performance");
// const predictRank = require("../analysis/rankpred");
// const predictCollege = require("../analysis/collegepred");
const Improvement = require("../analysis/improvement");
const topicWiseAnalysis = require("../analysis/topicWiseAnalysis");
const router = express.Router();

router.get("/current-performance", async (req, res) => {
    const data = await fetchQuizData();
    if (!data) return res.status(500).json({ error: "Failed to fetch data" });
    // console.log(data.currentQuiz);
    // console.log(data.previousQuizData)
    // console.log(data.quizDetails);
    const insights = extractQuizDetails(data.currentQuiz);
    console.log(insights);
    res.json(insights);
});

router.get("/topic-wise-performance", async (req, res) => {
    const data = await fetchQuizData();
    if (!data) return res.status(500).json({ error: "Failed to fetch data" });
    const analysis = topicWiseAnalysis(data.previousQuizData, data.currentQuiz);
    console.log(analysis);
    res.json(analysis);
});


router.get("/improvement", async (req, res) => {
    const data = await fetchQuizData();
    if (!data) return res.status(500).json({ error: "Failed to fetch data" });
    const analysis = Improvement(data.previousQuizData, data.currentQuiz);
    console.log(analysis);
    res.json(analysis);
});



module.exports = router;
