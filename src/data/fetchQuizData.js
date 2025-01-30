const axios = require("axios");
require("dotenv").config();

const API_RESPONSE = "https://www.jsonkeeper.com/b/LLQT"
// const API_QUIZ = process.env.API_QUIZ;
const API_HISTORY="https://api.jsonserve.com/XgAgFJ"
const API_QUIZ="https://api.jsonserve.com/rJvd7g"

async function fetchQuizData() {
    try {
        const [quizResponse, last5Response, quizDetails] = await Promise.all([
            axios.get(API_QUIZ),
            axios.get(API_HISTORY),
            axios.get(API_RESPONSE)
        ]);
        // const quizResponse = await axios.get("https://api.jsonserve.com/XgAgFJ");
        // const quizResponse = await axios.get(API_QUIZ);

        return {
            currentQuiz: quizResponse.data,
            previousQuizData: last5Response.data,
            quizDetails: quizDetails.data
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

module.exports = fetchQuizData;
