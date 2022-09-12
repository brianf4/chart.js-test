const mongoose = require('mongoose')

const moviePointsSchema = new mongoose.Schema({
  spiderman: {
    type: Number,
    required: true,
  }
  /*dragonball: {
    type: Number,
    required: true,
  },
  minions: {
    type: Number,
    required: true,
  },
  jaws: {
    type: Number,
    required: true,
  },
  thor: {
    type: Number,
    required: true,
  },*/
})

module.exports = mongoose.model('MoviePoints', moviePointsSchema, 'points')