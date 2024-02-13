import axios from "axios";
import { URL } from "./config";

function fetchReservation() {
  return axios.get("http://" + URL + ":3000/reservation");
}

function addReservation( reserv) {
  return axios.post(`http://${URL}:3000/reservation`,   reserv , {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function deleteReservById(NumReserv) {
  return axios.delete("http://" + URL + ":3000/reservation/" + NumReserv);
}

function ValidReservById(NumReserv) {
  return axios.patch("http://" + URL + ":3000/reservation/" , NumReserv , {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function RefusReservById(NumReserv) {
  return axios.patch("http://" + URL + ":3000/reservation/refus/" , NumReserv , {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default {
  fetchReservation,
  addReservation,
  deleteReservById,
  ValidReservById,
  RefusReservById
};
