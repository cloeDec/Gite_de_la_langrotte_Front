import axios from "axios";
import { URL } from "./config";

function fetchClient() {
  return axios.get("http://" + URL + ":3000/client");
}

function addClient(reserv) {
  return axios.post("http://" + URL + ":3000/client", reserv, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function deleteClientById(IDClient) {
  return axios.delete("http://" + URL + ":3000/client/" + IDClient);
}

export default {
  fetchClient,
  addClient,
  deleteClientById
};
