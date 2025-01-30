//src/analysis/rankpred.js

// if we calculate how many people are we better than in  general by previous data
// then we can predict our rank
// A simple formula is used:
// rank=10000/()
// predictedBetterThan + 1 
// rank= (predictedBetterThan+1)/10000
// ​
 
// (Assuming 10,000 students in the pool for ranking estimation).

function predictRank(previousQuizData, currentQuiz) {
    let totalBetterThan = 0;

    previousQuizData.forEach(test=>{
        totalBetterThan+=test.better_than;

    });
    const avgbetterthan = totalBetterThan/previousQuizData.length;
    // const positiveMarks = currentQuiz.quiz.questions_count*4;
    //   const negativeMerks = currentQuiz.negative_score;
    const scorefactor = parseFloat(currentQuiz.final_score)/currentQuiz.score;

    const predictedBetterThan = avgbetterthan + (currentQuiz.score - avgbetterthan)*scorefactor;

    let predictedRank = 10000/(predictedBetterThan+1);
    predictRank = Math.round(predictedRank);
    console.log(predictedRank)

    return {predictedRank, predictedBetterThan};


}

module.exports = predictRank;

// "better_than": 24,
// "total_questions": 128,
// "rank_text": "Topic Rank - #2402",
// "mistakes_corrected": 6,
// "initial_mistake_count": 8,
