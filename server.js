const express = require('express')
const app = express()
const PORT = 4000;
const mongoose = require('mongoose')
const MoviePoints = require('./models/chart')
require('dotenv').config({path: './config/.env'})

//Setting Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


mongoose.connect(
    process.env.DB_CONNECT, 
    { useNewUrlParser: true }, 
    () => {console.log("Connected to db!");}
)

app.get('/', (req, res) => {
    try {
        res.render('index.ejs');
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
})

//POST 
app.post('/', async (req, res) => {
    const moviePoint = new MoviePoints(
        {
            spiderman: req.body.spiderman,
            dragonballPoints: req.body.dragonball,
            minionsPoints: req.body.minions,
            jawsPoints: req.body.jaws,
            thorPoints: req.body.thor,
        }
    )
    try {
        await moviePoint.save()
        console.log(moviePoint)
        res.redirect('/')
        
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
        res.redirect('/');
    }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))