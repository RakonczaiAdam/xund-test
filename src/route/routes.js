const router = require('express').Router()
const controller = require('../controller/controller')
const uploader = require('../service/multer')

router.post('/upload', uploader.single('imageName'), controller.upload)

router.get('/fetch', controller.fetch)

module.exports = router