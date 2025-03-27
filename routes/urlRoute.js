const express = require('express')
const { generateShortUrl } = require('../controller/generateShortUrl')
const router = express.Router()

router.post("/", generateShortUrl)

module.exports = router;