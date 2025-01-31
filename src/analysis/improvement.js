// src/analysis/improvement.js
function Improvement(previousQuizData, currentQuiz) {
    const topicImprovement = {};

    // Process previous quiz data
    previousQuizData.forEach((test) => {
        const topic = test.quiz.topic || "Unknown Topic";
        if (!topicImprovement[topic]) {
            topicImprovement[topic] = { accuracy: 0, speed: 0 };
        }
        // Convert accuracy from "90 %" to number and assign speed as number
        topicImprovement[topic].accuracy = parseFloat(test.accuracy.toString().replace("%", "").trim()) || 0;
        topicImprovement[topic].speed = parseFloat(test.speed) || 0;
    });

    // Process current quiz data
    const currentTopic = currentQuiz.quiz.topic || "Unknown Topic";
    if (!topicImprovement[currentTopic]) {
        topicImprovement[currentTopic] = { accuracy: 0, speed: 0 };
    }

    topicImprovement[currentTopic].accuracy = parseFloat(currentQuiz.accuracy.toString().replace("%", "").trim()) || 0;
    topicImprovement[currentTopic].speed = parseFloat(currentQuiz.speed) || 0;

    // Analyze the performance
    const analysis = [];

    for (const [topic, data] of Object.entries(topicImprovement)) {
        let accuracy = parseFloat(data.accuracy.toString().replace("%", "").trim()); // Convert accuracy to number
        analysis.push({
            topic: topic,
            accuracy: accuracy,
            speed: data.speed,
            accuracy_status: accuracy < 70 ? "Weak" : "Strong",
            speed_status: data.speed < 90 ? "Weak" : "Strong",
        });
    }

    // Debugging logs to check data before filtering
    // console.log("Topic Improvement Data:", topicImprovement);
    // console.log("Analysis Data:", analysis);
    // console.log("Filtering Weak Accuracy...");
    // console.log(analysis.map((topic) => ({ topic: topic.topic, accuracy: topic.accuracy, accuracy_status: topic.accuracy_status })));
    // console.log("Filtering Weak Speed...");
    // console.log(analysis.map((topic) => ({ topic: topic.topic, speed: topic.speed, speed_status: topic.speed_status })));

    // Categorizing topics based on weakness
    // console.log("Before Filtering Weak Speed:", analysis);
    const weakSpeed = analysis.filter((topic) => topic.speed_status === "Weak");
    // console.log("After Filtering Weak Speed:", weakSpeed);

    // console.log("Before Filtering Very Weak Topics:", analysis);
    const veryWeakTopics = analysis.filter((topic) => topic.accuracy_status === "Weak" && topic.speed_status === "Weak");
    // console.log("After Filtering Very Weak Topics:", veryWeakTopics);

    const weakAccuracy = analysis.filter((topic) => topic.accuracy_status === "Weak");

    return {
        veryWeakTopics: veryWeakTopics,
        weakAccuracy: weakAccuracy,
        weakSpeed: weakSpeed,
    };
}

module.exports = Improvement;
