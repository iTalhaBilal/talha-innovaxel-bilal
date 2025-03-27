const express = require('express')
const urlRoute = require("./routes/urlRoute")


const app = express()
app.use("/url", urlRoute)
