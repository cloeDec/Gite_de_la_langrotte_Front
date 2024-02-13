import axios from "axios";
import { URL } from "./config";

function fetchAvis(){
    return axios.get("http://"+URL+":3000/avis")
}

export default {
    fetchAvis
}