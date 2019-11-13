
// Requiring our models
const axios = require('axios');
const db = require("./petfinder-api");
const router = require("express").Router();

router.route("/").get(
  async (req, res) => {
    let api = await db.tokenCall(); { }
    res.json(api)
  }
)

router.route("/dog").get(
  async (req, res) => {
    const params =
    {
      "type": "dog",
      "status": "adoptable",
    }
    let api = await db.tokenCall(params);
    res.json(api)
  }
);


router.route("/cat").get(
  async (req, res) => {
    const params = {
      "type": "cat",
      "status": "adoptable",
    }
    let api = await db.tokenCall(params); { }
    res.json(api)
  }
);

router.route("/furry").get(
  async (req, res) => {
    const params = {
      "type": "small-furry",
      "status": "adoptable",
      // "limit": 5
    }
    let api = await db.tokenCall(params); { }
    res.json(api)
  }
);

router.route("/rabbit").get(
  async (req, res) => {
    const params = {
      "type": "rabbit",
      "status": "adoptable",
      // "limit": 5
    }
    let api = await db.tokenCall(params); { }
    res.json(api)
  }
);

router.route("/bird").get(
  async (req, res) => {
    const params = {
      "type": "bird",
      "status": "adoptable",
      // "limit": 5
    }
    let api = await db.tokenCall(params); { }
    res.json(api)
  }
);

router.route("/other").get(
  async (req, res) => {
    const params = {
      "type": "scales-fins-other",
      "status": "adoptable",
      // "limit": 5
    }
    let api = await db.tokenCall(params); { }
    res.json(api)
  }
);

router.route("/horse").get(
  async (req, res) => {
    const params = {
      "type": "horse",
      "status": "adoptable",
      // "limit": 5
    }
    let api = await db.tokenCall(params); { }
    res.json(api)
  }
);

router.route("/barnyard").get(
  async (req, res) => {
    const params = {
      "type": "barnyard",
      "status": "adoptable",
      // "limit": 5
    }
    let api = await db.tokenCall(params); { }
    res.json(api)
  }
);

router.route("/blah").get(
  async (req, res) => {
    const params = req.query
    let api = await db.tokenCall(params); { }
    res.json(api)
  }
);


// Routes
// module.exports = function(app) {

router.route("/favorites").put(
  (req, res)=>{
  const params = req.query
  res.json()
  }
);

module.exports = router;
