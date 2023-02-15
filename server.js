const express = require("express");
const mongoose = require("mongoose");
const Game = require("./Model/Game");

const app = express();

app.use(express.json());

app.post("/api/games", async (req, res) => {
  const gameResult = await Game.create(req.body);
  if (gameResult) return res.json({ status: "success", data: gameResult });
  return res.json({ status: "failed" });
});

app.get("/api/games", async (req, res) => {
  const gameResult = await Game.find();
  res.json({ status: "success", results: gameResult.length, data: gameResult });
});

app.get("/api/games/:id", async (req, res) => {
  const gameResult = await Game.findById(req.params.id);
  res.json({ status: "success", data: gameResult });
});

mongoose
  .connect("mongodb://localhost:27017/gaming")
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch(() => {
    console.log("Failed to connect database");
  });

app.listen(4000, () => {
  console.log("Your server is running at port " + 4000);
});
