// src/analysis/performance.js
function extractQuizDetails(quizResponse) {
    return {
        user_id: quizResponse.user_id,
        quiz_id: quizResponse.quiz_id,
        score: quizResponse.score,
        accuracy: parseFloat(quizResponse.accuracy.replace("%", "")),
        speed: parseFloat(quizResponse.speed),
        final_score: parseFloat(quizResponse.final_score),
        negative_score: parseFloat(quizResponse.negative_score),
        correct_answers: quizResponse.correct_answers,
        incorrect_answers: quizResponse.incorrect_answers,
        total_questions: quizResponse.total_questions,
        topic: quizResponse.quiz.topic,
        rank_text: quizResponse.rank_text,
        mistakes_corrected: quizResponse.mistakes_corrected,
        initial_mistake_count: quizResponse.initial_mistake_count,
        response_map: quizResponse.response_map
    };
}



module.exports = extractQuizDetails;
