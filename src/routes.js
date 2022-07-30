const router = require('express').Router()

router.post('/upload', (req, res)=>{res.send("upload image")})

router.get('/fetch', (req, res)=>{res.send("fetch images")})

module.exports = router