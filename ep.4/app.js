const express = require('express')
const app = express()
const port = 3000
const debug  = require('debug','app')
const morgan  = require('morgan')
app.use(morgan('combined'));
app.get('/',(req,res) =>{
    res.send('hi')
})
app.listen(port,()=>{
    debug('listenning on port',port);
})