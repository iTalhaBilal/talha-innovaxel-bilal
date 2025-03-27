
const { nanoid } = require('nanoid')
const URL = require("../model/schema")
async function generateShortUrl(req, res) {
    const body = await req.body
    if (!body) return res.status(400).json({ error: "Enter a URL" });
    const myUrl = nanoid(10)
    await URL.create({
        shortCode: myUrl,
        url: body.url,
        accessCount: 0
    })

    return res.json({ short: myUrl })
}

module.exports = {
    generateShortUrl
}