const express = require('express')
const urlRoute = require("./routes/urlRoute")
const URL = require("./model/schema");

const { connectToDb } = require("./connect")

connectToDb("mongodb://localhost:27017/shortUrls").then(() => console.log("MongoDb Connected!")).catch((e) => console.log(`Error connecting to DB: ${e}`))
const PORT = 8001;
const app = express()
app.use(express.json())

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({
        shortCode: shortId
    }, { $inc: { accessCount: 1 } })
    res.redirect(entry.url)
})

app.use("/url", urlRoute)
app.listen(PORT, () => console.log("Server Started!"))