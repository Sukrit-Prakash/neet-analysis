const express = require("express");

const fetchQuizData = require("../data/fetchQuizData");
// const extractQuizDetails = require("../analysis/performance");
const predictRank = require("../analysis/rankpred");
const findCollege = require("../analysis/collegepred");

const router = express.Router();

router.get("/rank-prediction", async (req, res) => {
    const data = await fetchQuizData();
    if (!data) return res.status(500).json({ error: "Failed to fetch data" });
     
    const rankInfo = predictRank(data.previousQuizData, data.currentQuiz);
    res.json(rankInfo);
});

const rankvcollege = require("../data/rankvscollege.json");
router.get("/college-prediction", async (req, res) => {
    const data = await fetchQuizData();
    if (!data) return res.status(500).json({ error: "Failed to fetch data" });

    const rankInfo = predictRank(data.previousQuizData, data.currentQuiz);
    const college = findCollege(rankInfo, rankvcollege);

    res.json({ rankInfo, predictedCollege: college });
});

module.exports = router;
