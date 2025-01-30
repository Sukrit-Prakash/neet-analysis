//src/analysis/topicWiseAnalysis.js
function topicWiseAnalysis(previousQuizData, currentQuiz) {
    const topicPerformance = {};

    previousQuizData.forEach((test)=>{
        const topic = test.quiz.topic || "Unknown Topic";
        const id = test.quiz_id;
        if(!topicPerformance[topic]) {
            topicPerformance[topic] = {correct: 0, total: 0,incorrect: 0};
        }
        topicPerformance[topic].correct = test.correct_answers;
        topicPerformance[topic].incorrect = test.incorrect_answers;
        topicPerformance[topic].total = test.total_questions;


    });
           //current test performance should be added to calculate overall weak and strong areas
    const currentTopic = currentQuiz.quiz.topic || "Unknown Topic";
           if(!topicPerformance[currentTopic]) {
            topicPerformance[currentTopic] = {correct: 0, total: 0,incorrect: 0};


    topicPerformance[currentTopic].correct = currentQuiz.correct_answers;
    topicPerformance[currentTopic].incorrect = currentQuiz.incorrect_answers;
    topicPerformance[currentTopic].total = currentQuiz.total_questions; 


    // an array for  each topic 
    const analysis =[];

    
    // for(let i=0;i<topicPerformance.length;i++){
    //     const topic = topicPerformance[i];
    //     if(topic.total === 0) continue;
    //     const accuracy = ((topic.correct / topic.total) * 100).toFixed(2);
    //     analysis.push({
    //         topic: topic,
    //         accuracy: `${accuracy}%`,
    //         total_questions: topic.total,
    //         incorrect_answers: topic.incorrect,
    //         correct_answers: topic.correct,
    //         status: accuracy >= 70 ? "Strong" : "Weak"
    //     });
    // }
    for (const [topic, data] of Object.entries(topicPerformance)) {
        if (data.total === 0) continue; // Avoid division by zero
        const accuracy = ((data.correct / data.total) * 100).toFixed(2);
        analysis.push({
            topic: topic,
            accuracy: `${accuracy}%`,
            total_questions: data.total,
            incorrect_answers: data.incorrect,
            correct_answers: data.correct,
            status: accuracy >= 70 ? "Strong" : "Weak",
        });
    }
    
    const weakTopics = analysis.filter((topic) => topic.status === "Weak");
    const strongTopics = analysis.filter((topic) => topic.status === "Strong");
    console.log(weakTopics);
    console.log(strongTopics);
    
   return {
       
       weakTopics:weakTopics,
       strongTopics:strongTopics
   }
    }
}

module.exports = topicWiseAnalysis;


// "score": 32,
// "trophy_level": 2,
// "accuracy": "80 %",
// "speed": "100",
// "final_score": "30.0",
// "negative_score": "2.0",
// "correct_answers": 8,
// "incorrect_answers": 2