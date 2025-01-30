//  schema for student performance

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// for saving in the database
const studentSchema = new Schema({
    user_id: String,
    // quiz_id: String,
    avgscore: Number,
    accuracy: Number,
    speed: Number,
    predicted_rank: Number,
    predicted_college: [],
});

module.exports = mongoose.model('student', studentSchema);