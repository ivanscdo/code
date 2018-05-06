// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Chirp = require("../models/chirp.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Chirp.findAll({}).then(function(results) {
      //no settings just find everyone of them
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a chirp
  // running query for us, we just pass chirp.create
  app.post("/api/new", function(req, res) { //api new

    console.log("Chirp Data:");
    console.log(req.body);

    Chirp.create({ //pass in obj specifying what we want the keys to be
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};

