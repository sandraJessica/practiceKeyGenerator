const express = require("express");
const ejs = require("ejs");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.set("view engine", "ejs");

const keys = [
  "A", "B", "C", "D", "E", "F", "G",
  "A#", "B#", "C#", "D#", "E#", "F#", "G#",
  "A♭", "B♭", "C♭", "D♭", "E♭", "F♭", "G♭"
];
const modes = ["minor", "major"];


app.get("/", (req, res) => {

const randomKeyIndex = Math.floor(Math.random() * keys.length);
const randomModeIndex = Math.floor(Math.random() * modes.length);

const randomKey = keys[randomKeyIndex];
const randomMode = modes[randomModeIndex];

  res.render(
    "index",
    {
      randomKey: randomKey,
      randomMode: randomMode,
    }
  );
});







app.listen(port, function(){

  console.log(`Server is running on port ${port}.`)

});
