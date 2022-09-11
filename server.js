const express = require('express')
const app = express()
const PORT = 4000;
const mongoose = require('mongoose')
require('dotenv').config()

//Setting Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))