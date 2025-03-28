const express = require('express')
const { generateShortUrl, updatedUrl, getOriginalUrl } = require('../controller/logic')
const { deletedUrl } = require('../controller/logic')
const router = express.Router()

router.post("/", generateShortUrl)
router.put("/:shortId", updatedUrl)
router.delete("/:shortId", deletedUrl)
router.get("/:shortId", getOriginalUrl)
module.exports = router;