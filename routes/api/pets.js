const router = require("express").Router();
const petsController = require("../../controllers/petsController");

// Matches with "/api/pets"
router.route("/")
  .get(petsController.findAll)
  .post(petsController.create);

// Matches with "/api/pets/:id"

router
  .route("/species/:species")
  .get(petsController.findByType)
  .get(petsController.findBySpecies)
  .get(petsController.findByBreed)
  .get(petsController.findBySize)
  .get(petsController.findByAge)
  .get(petsController.findByGender)
  .get(petsController.findById)
  .get(petsController.findByName)
  .get(findBySpecies/Breed)

  // .put(petsController.update)
  // .delete(petsController.remove);
  // .post(petsController.)


//Below is where the get and post request for favorite pets.

  .get(petsController.Favorite)
 .delete(petsController.Favorite)

module.exports = router;


