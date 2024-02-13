import axios from "axios";
import { URL } from "./config";

function fetchImageById(ID_Gite) {
  return axios.get("http://" + URL + ":3000/image/" + ID_Gite);
}

function addImage(ID_Gite) {
  return axios.post("http://" + URL + ":3000/image", ID_Gite, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}


export default {
  fetchImageById,
  addImage
};
