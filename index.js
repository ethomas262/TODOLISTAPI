require('dotenv').config

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT =  8080

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json())
const ToDoList = require('./routes/ToDoList.js')
app.use('/ToDoList')
app.listen(PORT, () => console.log("Server Started"))