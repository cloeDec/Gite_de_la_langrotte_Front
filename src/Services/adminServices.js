import axios from "axios";
import { URL } from "./config";


function fetchAllGites() {
  return axios.get("http://" + URL + ":3000/admin");
}
function fetchGiteByID(IDGite) {
    return axios.get("http://" + URL + ":3000/admin/" + IDGite);
  }
  
function addGite(gites) {
  return axios.post("http://" + URL + ":3000/admin", gites, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function deleteGiteById(IDGite) {
  return axios.delete("http://" + URL + ":3000/admin/" + IDGite);
}

function modifyGiteById(gite) {
  return axios.patch("http://" + URL + ":3000/admin/" , gite , {
    headers: {
      "Content-Type": "application/json",
    },
  });
}



export default {
  fetchAllGites,
  addGite,
  deleteGiteById,
  fetchGiteByID,
  modifyGiteById
};
