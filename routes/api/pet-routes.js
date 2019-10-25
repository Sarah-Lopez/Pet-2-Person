
// Requiring our models
const axios = require('axios');
const db = require("./petfinder-api");
const router = require("express").Router();
// console.log("Pet Api Route");

router.route("/").get(
    async(req, res)=>{
      let api = await db.tokenCall();{}
      // console.log('>>>>>>>>>>> api', api);
      res.json(api)
    }
)

router.route("/dog").get(
  async(req, res)=>{
    console.log(req.params)
    const params = 
    {
      "type": "dog",
      "status": "adoptable",
      "limit": 1
    }
    let api = await db.tokenCall(params);
    res.json(api)
  }
);

// router.route("/dog/:location").get(
//   async(req, res)=>{
//     console.log(req.params)
//     const params = 
//     {
//       // "location": req.params,
//       "sort": "distance"
//     }
//     let api = await db.tokenCall(params);
//     res.json(api)
//   }
// );

router.route("/cat").get(
  async(req, res)=>{
    const params = {
      "type": "cat",
      "status": "adoptable",
      "limit": 5
    }
    let api = await db.tokenCall(params);{}
    res.json(api)
  }
);

// router.get("/blah", (req, res) => {
//   axios
//   .get(
//     async(reqe, res)=>{
//       const params = req.query
//       let api = await db.tokenCall(params);{}
//       res.json(api)
//     }
//   )
// });

router.route("/blah").get(
  async(req, res)=>{
    const params = req.query
    let api = await db.tokenCall(params);{}
    res.json(api)
  }
);

// Routes
// module.exports = function(app) {


module.exports = router;
