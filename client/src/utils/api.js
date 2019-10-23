import axios from "axios";

export default {
  // Gets all pets
  getPets: function() {
    return axios.get("/api/pets");
  },
  // Gets the pet with the given id
  getPet: function(species) {
    return axios.get("/api/pets/" + species);
  },
  // Deletes the pet with the given id
  deletePet: function(id) {
    return axios.delete("/api/pets/" + id);
  },
  // Saves a pet to the database
  savePet: function(petData) {
    return axios.post("/api/pets", petData);
  },

  // saveUser: function(userData) {
  //   return axios.post("/signup", userData);
  // },
  // getPet: function(query) {
  //   return axios.get("/api/pets/", { params: query });
  // },

  //Will push pets to favorites here.
  //post

};

