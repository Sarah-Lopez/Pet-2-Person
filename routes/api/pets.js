const router = require("express").Router();
const petsController = require("../../controllers/petsController");

// Matches with "/api/pets"
router.route("/")
  .get(petsController.findAll)
  .post(petsController.create);

// Matches with "/api/pets/:id"
router
  .route("/species/:species")
  .get(petsController.findBySpecies)
  .get(petsController.findByName)
  .get(petsController.findByType)
  .get(petsController.findByGender)
  .get(petsController.findByAge)
  .get(petsController.findByBreed)
  
  .put(petsController.update)


  
  .delete(petsController.remove);

module.exports = router;


