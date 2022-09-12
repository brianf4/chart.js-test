const express = require('express')
const app = express()
const PORT = 4000;
const mongoose = require('mongoose')
require('dotenv').config()

//Setting Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


mongoose.connect(process.env.DB_CONNECT, 
    {userNewUrlParser: true},
    () => {console.log('connected to db...')}

)

app.get('/', (req, res) => {
    try {
        res.render('index')
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))