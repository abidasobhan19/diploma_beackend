const express = require('express')

const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ResultRoute = require('./routes/resultRoute')

require("./initDB")
app.use('/result',ResultRoute)

app.listen(3000,()=>{
    console.log('Polytechnic Result is Running')
})