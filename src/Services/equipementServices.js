import axios from "axios";
import { URL } from "./config";

function fetchEquipementById(ID_Gite) {
    return axios.get("http://"+URL+":3000/equipement/" + ID_Gite);
  }

export default {
    fetchEquipementById
}