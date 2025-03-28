const short_id = require('shortid');
const URL = require("../model/schema");
const { urlencoded } = require('express');

async function generateShortUrl(req, res) {
    console.log("POST API HIT")
    try {
        const { url } = req.body; // ✅ Destructure `url` from body

        if (!url) return res.status(400).json({ error: "Enter a URL" });

        const myUrl = short_id.generate(); // ✅ Fix: Use `shortid.generate()`

        const newUrl = await URL.create({
            shortCode: myUrl,
            url: url,
            accessCount: 0
        });

        return res.status(201).json({ message: "Short URL created!", data: newUrl });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


async function deletedUrl(req, res) {
    console.log("DELETE API HIT")

    try {
        const shortId = req.params.shortId


        const newUrl = await URL.findOneAndDelete({
            shortCode: shortId,
        });
        if (!newUrl) return res.status(404).json({ error: "No Such Short Id exists!" })
        return res.status(204).json({ message: "Short URL Deleted!" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


async function updatedUrl(req, res) {
    console.log('PUT API HIT')
    const shortId = req.params.shortId
    const newShortId = short_id.generate()
    try {
        const updatedUrl = await URL.findOneAndUpdate({
            shortCode: shortId
        }, {
            shortCode: newShortId
        })
    } catch (error) {
        return res.status(400).json({ error })
    }
    if (!updatedUrl) return res.status(404).json({ error: "Short Url Does NOT exist" })
    return res.status(200).json({ message: `Url Updated from ${shortId} to ${newShortId}`, data: updatedUrl })
}


async function getOriginalUrl(req, res) {
    console.log("GET API HIT")
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({
        shortCode: shortId
    }, { $inc: { accessCount: 1 } })
    if (!entry) return res.status(404)
    return res.status(201).json({ data: entry })
}




module.exports = {
    generateShortUrl,
    deletedUrl,
    updatedUrl,
    getOriginalUrl

};


