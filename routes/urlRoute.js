const express = require('express')
const { generateShortUrl } = require('../controller/logic')
const router = express.Router()

router.post("/", generateShortUrl)
module.exports = router;