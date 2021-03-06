const db = require("../models/user.js");

module.exports = {
    findAll: function(req, res) {
      db
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db
        .findOne({email:req.body.email})
        .then(currentUser => {
          if(currentUser){
            res.send("Welcome back!")
          }else {
            db.create(req.body)
            .then(dbModel => res.json(dbModel))
          }})
    }
  };

  