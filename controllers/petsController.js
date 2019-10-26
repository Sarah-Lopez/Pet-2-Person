const db = require("../models");

// Defining methods for the petsController
module.exports = {
  findAll: function (req, res) {
    db.Pet
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //findAll function is out testing ground to get results rendered on a page.

  findByType: function (req, res) {
    db.Pet
      .findByType(req.params.type)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySpecies: function (req, res) {
    db.Pet
      .findBySpecies(req.params.species)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByBreed: function (req, res) {
    db.Pet
      .findByBreed(req.params.breed)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySize: function (req, res) {
    db.Pet
      .findBySize(req.params.size)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByAge: function (req, res) {
    db.Pet
      .findByAge(req.params.age)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByGender: function (req, res) {
    db.Pet
      .findByGender(req.params.gender)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Pet
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function (req, res) {
    db.Pet
      .findByName(req.params.name)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  //add in findbys for every category.


  create: function (req, res) {
    db.Pet
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Pet
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Pet
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};