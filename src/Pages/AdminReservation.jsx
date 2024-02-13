import React, { useEffect, useState } from "react";
import "../Styles/Admin.css";
import { useParams } from "react-router-dom";
import Reservation from "../Components/AdminReservation";
import AdminNavBar from "../Components/AdminNavBar";
import reservationServices from "../Services/reservationServices";

const Admin = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState([]);

  const fetchReservation = async () => {
    try {
      const response = await reservationServices.fetchReservation();
      setReservation(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchReservation();
  }, []);

  return (
    <>
        <AdminNavBar/>
      <div className="admin">
        <h2>Réservation :</h2>
        <div className="table_reservation">
          <thead>
            <tr>
              <th>Num réservation</th>
              <th>Nb personnes</th>
              <th>Nom Client</th>
              <th>Prénom Client</th>
              <th>Nom Gite</th>
              <th>Date Arrivée</th>
              <th>Date Départ</th>
              <th>Nb jour</th>
              <th>Prix Total</th>
              <th>Statut</th>
            </tr>
          </thead>

          {reservation.map((e) => {
            return <Reservation key={e.Num_reservation} reserv={e} />;
          })}
        </div>

      </div>
    </>
  );
};

export default Admin;
