
// Requiring our models
const db = require("./petfinder-api");
const router = require("express").Router();
console.log("Pet Api Route");
// console.log(db.tokenCall());
// console.log(db.apiCall());
// console.log('>>>>>>>>>>> test', test);

router.route("/").get(
    async(req, res)=>{
      let api = await db.tokenCall();{}
      // let bird = await db.bird()
      // console.log('>>>>>>>>>>> api', api);
      // console.log('>>>>>>>>>>> bird', bird);
      res.json(api)
    }
)

module.exports = router;
