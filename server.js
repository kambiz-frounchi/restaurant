
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const Database = require('./database');
const db = new Database();


// Sets up the Express App
// =============================================================
var app = express();
//var PORT = 3000;
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(`/reserve`, require(`./routes/reserve`));
app.use(`/`, require(`./routes/tables`));
app.use(`/`, require(`./routes/waitlist`));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "html/home.html"));
});

app.delete("/api/clear", (req,res) => {
  db.clearDb();
  res.sendFile(path.join(__dirname, "html/home.html"));
})


/*
// Displays all characters
app.get("/api/", function(req, res) {
  return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});
*/

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});