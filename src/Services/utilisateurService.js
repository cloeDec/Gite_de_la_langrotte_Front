import axios from "axios";
import { URL } from "./config";

function loginUtilisateur(utilisateur){
    return axios.post("http://"+URL+":3000/connexion" , utilisateur)
}
function fetchUtilisateurByID(IDUti) {
    return axios.get("http://" + URL + ":3000/utilisateur/" + IDUti);
  }

function modifyUtiById(IDUti) {
return axios.patch("http://" + URL + ":3000/utilisateur/" , IDUti , {
    headers: {
    "Content-Type": "application/json",
    },
});
}
export default {
    loginUtilisateur,
    fetchUtilisateurByID,
    modifyUtiById
}