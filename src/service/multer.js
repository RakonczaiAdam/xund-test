const multer = require('multer')

const engine = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./images")
    },
    filename: (req, file, cb)=>{
        const name = file.originalname.split('.')
        cb(null, `${name[0]}-${Date.now()}.${name[1]}`)
    }
})

const uploader = multer({storage: engine})

module.exports = uploader