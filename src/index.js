require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./route/routes')
const cors = require('./service/cors')

console.log("starting ...")
console.log(`enviroment: ${process.env.NODE_ENV}`)

app.use(cors)

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.originalUrl}`)
    next()
})
app.use('/', routes)

app.listen( (process.env.PORT || 3001) , ()=>{
    console.log("API running at port "+(process.env.PORT || 3001))
})