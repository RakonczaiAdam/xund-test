const router = require('express').Router()
// const controller = require('../controller/controller')
// const uploader = require('../service/multer')
import controller from '../controller/controller'
import uploader from '../service/multer'

router.post('/upload', uploader.single('imageName'), controller.upload)

router.get('/fetch', controller.fetch)

export default router