const express = require('express')
const urlRoute = require("./routes/urlRoute")
const URL = require("./model/schema");
const shortyid = require('shortid');


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
    if (!entry) return res.status(404)
    return res.status(201).json({ data: entry })

})

app.put('/:shortId', async (req, res) => {
    const shortId = req.params.shortId
    const newShortId = shortyid.generate()
    const updatedUrl = await URL.findOneAndUpdate({
        shortCode: shortId
    }, {
        shortCode: newShortId
    })
    if (!updatedUrl) return res.status(404).json({ error: "Short Url Does NOT exist" })
    console.log('PUT API HIT')
    return res.status(200).json({ message: `Url Updated from ${shortId} to ${newShortId}`, data: updatedUrl })
})

app.use("/shorten", urlRoute)
app.listen(PORT, () => console.log("Server Started!"))