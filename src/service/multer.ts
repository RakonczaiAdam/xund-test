import { Request } from "express"
import multer from 'multer'

const engine = multer.diskStorage({
    destination: (req: Request, file: MyFile, cb: Function)=>{
        cb(null, "./images")
    },
    filename: (req: Request, file: MyFile, cb: Function)=>{
        const name = file.originalname.split('.')
        cb(null, `${name[0]}-${Date.now()}.${name[1]}`)
    }
})

const uploader = multer({storage: engine})

export default uploader