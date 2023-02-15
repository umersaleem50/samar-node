const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  rating: {
    type: Number,
  },
  ratingQuantity: {
    type: Number,
  },
  gameType: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
