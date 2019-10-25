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
  getSearchPet: function(type, query) {
     return axios.get("/api/pets/" + type, { params: query });
  },
  
  getPetfinderResults: function(query) {
    return axios.get("/api/petfinder");
  },


  //Will push pets to favorites here.
  //post

};



