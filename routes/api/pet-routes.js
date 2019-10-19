
// Requiring our models
const db = require("./petfinder-api");
console.log(db);

// Routes
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/pets", function(req, res) {
  /*  var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }*/
    
  });

  // Get route for retrieving a single post
  app.get("/api/pets/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Author]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

};
