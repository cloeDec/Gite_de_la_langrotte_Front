import axios from "axios";
import { URL } from "./config";

function fetchGites(){
    return axios.get("http://"+URL+":3000/gites")
}

function fetchGiteById(ID_Gite) {
    return axios.get("http://"+URL+":3000/gites/" + ID_Gite);
  }

export default {
    fetchGites,
    fetchGiteById
}