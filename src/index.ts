
require('dotenv').config()
import { NextFunction, Request, Response } from "express"
import express from 'express'
import routes from './route/routes'
import cors from './service/cors'
import config from './database/config/config.json'
const app = express()

console.log("starting ...")
console.log(`enviroment: ${process.env.NODE_ENV}`)
const dialect = process.env.NODE_ENV === "developement" ? config.development.dialect : config.production.dialect
console.log(`db dialect: ${dialect}`)

app.use(cors)

app.use(express.static('images'))

app.use((req: Request, res: Response, next: NextFunction)=>{
    console.log(`${req.method} ${req.originalUrl}`)
    next()
})
app.use('/', routes)

app.listen( (process.env.PORT || 3001) , ()=>{
    console.log("API running at port "+(process.env.PORT || 3001))
})