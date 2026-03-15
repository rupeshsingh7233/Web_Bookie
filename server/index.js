const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express()

// middleware
app.use(express.json());  // req.body 
app.use(cors());

// register and login routes
app.use("/auth", require("./routes/userAuth"));

// dashboard route
app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000, () => {
    console.log("Server is running on port 5000!")
})