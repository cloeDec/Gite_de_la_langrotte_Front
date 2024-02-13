import axios from "axios";
import { URL } from "./config";

function loginUtilisateur(utilisateur){
    return axios.post("http://"+URL+":3000/connexion" , utilisateur)
}

export default {
    loginUtilisateur
}