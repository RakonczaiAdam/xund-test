const express = require('express')
const app = express()
const routes = require('./routes')

console.log("starting ...")

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.originalUrl}`)
    next()
})
app.use('/', routes)

app.listen( (process.env.PORT || 3001) , ()=>{
    console.log("API running at port "+(process.env.PORT || 3001))
})