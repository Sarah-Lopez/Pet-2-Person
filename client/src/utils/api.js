//*************************Code below comes from example activity************* */
import axios from "axios";

export default {
  // Gets all pets
  getPets: function() {
    return axios.get("/api/pets");
  },
  // Gets the book with the given id
  getPet: function(id) {
    return axios.get("/api/pets/" + id);
  },
  // Deletes the book with the given id
  deletePet: function(id) {
    return axios.delete("/api/pets/" + id);
  },
  // Saves a book to the database
  savePet: function(petData) {
    return axios.post("/api/pets", petData);
  }
};

