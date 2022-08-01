const { Images } = require('../database/models')
const sizeOf = require('image-size')

const upload = async (req, res) =>{
    try{
        const dimensions = sizeOf(req.file.path)
        const image = await Images.create({
            fileName: req.file.filename,
            fileSize: req.file.size,
            width: dimensions.width,
            height: dimensions.height,
            uploaded: new Date(),
            sourceIp: req.ip,
            description: req.body.description
        })
        console.log(image)
        return res.send("Image uploaded successfully!")
    }catch(error){
        console.error(error.message)
        return res.status(500).send(error.message)
    }
}

const fetch = async (req, res) =>{
    try{
        const images = await Images.findAll()
        return res.json(images)
    }catch(error){
        console.error(error.message)
        return res.status(500).send(error.message)
    }
}

module.exports = {
    upload,
    fetch
}