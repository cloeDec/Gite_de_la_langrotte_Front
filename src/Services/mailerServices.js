import axios from "axios";
import { URL } from "./config";


function sendMail(formData){
    return axios.post("http://"+URL+":3000/mail", formData)
}

export default {
    sendMail
}