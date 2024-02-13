import React, { useState, useEffect } from "react";
import Sup from "../Assets/trash-outline.svg";
import Valid from "../Assets/icons8-coche.svg";
import Refu from "../Assets/icons8-effacer.svg";
import { toast } from "react-toastify";
import reservationServices from "../Services/reservationServices";
import dateFormat from "dateformat";

const AdminGite = ({ reserv }) => {
  const handleValid = async (e) => {
    try {
      const response = await reservationServices.ValidReservById(reserv);
      setTimeout(() => {
        window.location.reload(true);
      }, 500);
      toast.success("La réservation a bien été validée");
    } catch (e) {
      console.log(e);
    }
  };

  const handleRefu = async (e) => {
    try {
      const response = await reservationServices.RefusReservById(reserv);
      toast.success("La réservation a bien été refusée");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (ID) => {
    try {
      await reservationServices.deleteReservById(ID);
      toast.success("La réservation a bien été supprimé");
    } catch (error) {
      console.error(
        "Erreur lors de la suppression de la réservation : ",
        error
      );
    }
  };

  return (
    <>
      <tbody>
        <tr>
          <td>{reserv.Num_reservation}</td>
          <td>{reserv.Nb_personnes}</td>
          <td>{reserv.Nom_Client}</td>
          <td>{reserv.Prenom_Client}</td>
          <td>{reserv.Nom_Gite}</td>
          <td>{dateFormat(reserv.Date_debut_resa, "dd-mm-yyyy")}</td>
          <td>{dateFormat(reserv.Date_fin_resa, "dd-mm-yyyy")}</td>
          <td>{reserv.Nombre_de_Jours}</td>
          <td>{reserv.Prix_Total} €</td>
          <td className={reserv.Statut}>{reserv.Statut}</td>
          <td>
            <button>
              <img
                src={Valid}
                onClick={() => {
                  handleValid(reserv.Num_reservation);
                }}
              />
            </button>
          </td>
          <td>
            <button>
              <img
                src={Refu}
                onClick={() => {
                  handleRefu(reserv.Num_reservation);
                }}
              />
            </button>
          </td>
          <td>
            <button>
              <img
                src={Sup}
                onClick={() => {
                  handleDelete(reserv.Num_reservation);
                }}
              />
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default AdminGite;
