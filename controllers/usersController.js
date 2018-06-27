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
        .findOne({email:req.email})
        .then(currentUser => {
          if(currentUser){
            dbModel => res.json(dbModel)
          }else {
            db.create(req.body)
            .then(dbModel => res.json(dbModel))
          }})
    }
  };

  