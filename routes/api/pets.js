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

  // .put(petsController.update)



  // .delete(petsController.remove);



  .post(petsController.findAll)

  .get(findBySpecies/Breed)

module.exports = router;


