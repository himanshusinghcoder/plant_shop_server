const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
var cors = require('cors')
const routes = require('./router')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(express.json())

app.use('/',(req,res,next)=>{
    const time1 =new Date()
    const request = `${req.method}|${req.originalUrl}|${JSON.stringify(req.body)}`
    res.on('finish' ,()=>{
        console.log(`${request} | ${new Date() - time1}ms |`,res.statusCode );
    })
    next()
})

app.use('/api/v1/', routes)

let errorMiddle = (error,req,res,next)=>{
 console.log("error in app",error);
 res.status(400).json({status: 'fail', error: error.message});
}

app.use(errorMiddle);

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`app listening at PORT=${process.env.SERVER_PORT}`)
})