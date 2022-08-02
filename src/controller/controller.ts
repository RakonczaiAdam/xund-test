import {Request, Response} from 'express'
import sizeOf from 'image-size'
const { Images } = require('../database/models')


const upload = async (req: Request, res: Response) =>{
    try{
        if(req.file === undefined)
            return res.status(400).send("file undefined")
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
    }catch(error: any){
        console.error(error.message)
        console.error(error)
        return res.status(500).send(error.message)
    }
}

const fetch = async (req: Request, res: Response) =>{
    try{
        const images = await Images.findAll()
        return res.json(images)
    }catch(error: any){
        console.error(error.message)
        return res.status(500).send(error.message)
    }
}

export default {
    upload,
    fetch
}