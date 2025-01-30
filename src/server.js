const express = require("express");
 
const cors = require("cors");
const quizRoutes = require("./routes/quizroute");
const rankRoutes = require("./routes/rankroute");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",quizRoutes)

app.use("/api",rankRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})
