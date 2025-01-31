// analysis/collegePrediction.js


//as all the dataset of college vs rank is deleted on kaggle
// so i am using a synthetic dataset    


//any college that is within 5% of the predicted rank
// and total seat to be 5000
// should be included in the array

// function findCollege(rank, collegeList) {
//     for (const college of collegeList) {
//         const [minRank, maxRank] = college.RankRange.split('-').map(Number);
        
//         if (rank >= minRank && rank <= maxRank) {
//             return college; // Return the first matched college
//         }
//     }
//     return null; // Return null if no college is found
// }

// module.exports = findCollege;




function predictCollege(rank, collegeList) {
    let predCollege = [];  

    collegeList.forEach(college => {
        if (!college.RankRange || !college.RankRange.includes('-')) {
            console.log("Invalid RankRange:", college.RankRange);
            return; 
        }

        const [minRank, maxRank] = college.RankRange.split('-').map(Number);

        if (isNaN(minRank) || isNaN(maxRank)) {
            console.log("Error parsing RankRange:", college.RankRange);
            return;
        }

        // ✅ Ensure rank falls within the range
        if (rank >= minRank && rank <= maxRank) {
            predCollege.push(college);
        }
    });

    console.log("Predicted Colleges:", predCollege);
    return predCollege;
}

module.exports = predictCollege;

