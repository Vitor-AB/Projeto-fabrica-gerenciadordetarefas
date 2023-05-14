const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.get("/api", (req,res) => {
    res.json({"user": ["userOne", "userTwo","userThree"]})
})


app.listen(5100, () => {console.log("Server started on port 5100")})