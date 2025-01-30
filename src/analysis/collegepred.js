// analysis/collegePrediction.js


//as all the dataset of college vs rank is deleted on kaggle
// so i am using a synthetic dataset    


//any college that is within 5% of the predicted rank
// and total seat to be 5000
// should be included in the array

function predictCollege(rank,collegeList) {
let predCollege ={};

collegeList.forEach(college=>{
    const [minRank, maxRank] = college.RankRange.split('-').map(Number);

    const lowerBound = Math.max(1,minRank - (5000*0.05));
    const upperBound = Math.min(5000,maxRank + (5000*0.05));

    if (rank >= lowerBound && rank <= upperBound) {
        predCollege.push(college);
    }
})
console.log(predCollege)
return predCollege

}

module.exports = predictCollege