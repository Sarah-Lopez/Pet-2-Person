
// Requiring our models
const db = require("./petfinder-api");
const router = require("express").Router();
console.log("Pet Api Route");

router.route("/").get(
    async(req, res)=>{
      let api = await db.tokenCall();{}
      // console.log('>>>>>>>>>>> api', api);
      res.json(api)
    }
)

module.exports = router;
