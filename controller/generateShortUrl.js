const shortid = require('shortid');
const URL = require("../model/schema");

async function generateShortUrl(req, res) {
    try {
        const { url } = req.body; // ✅ Destructure `url` from body

        if (!url) return res.status(400).json({ error: "Enter a URL" });

        const myUrl = shortid.generate(); // ✅ Fix: Use `shortid.generate()`

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

module.exports = {
    generateShortUrl
};
