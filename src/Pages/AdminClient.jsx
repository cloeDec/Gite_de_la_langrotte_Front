import React, { useEffect, useState } from "react";
import "../Styles/Admin.css";
import { useParams } from "react-router-dom";
import adminService from "../Services/adminServices";
import AdminNavBar from "../Components/AdminNavBar";
import Client from "../Components/AdminClient";
import { toast } from "react-toastify";
import reservationServices from "../Services/reservationServices";
import clientServices from "../Services/clientServices";

const Admin = () => {
  const { id } = useParams();
  const [gites, setGites] = useState([]);
  const [reservation, setReservation] = useState([]);
  const [client, setClient] = useState([]);
  const [gite, setGite] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setGite({ ...gite, [name]: value });
  };

  const fetchAllGite = async () => {
    try {
      const response = await adminService.fetchAllGites();
      setGites(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchReservation = async () => {
    try {
      const response = await reservationServices.fetchReservation();
      setReservation(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchClient = async () => {
    try {
      const response = await clientServices.fetchClient();
      console.log(response);
      setClient(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await adminService.addGite(gite);
      toast.success("Le gite à bien été ajouté");
      setGite({ titre: "", contenu: "" }); // Réinitialisation du formulaire
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAllGite();
    fetchReservation();
    fetchClient();
  }, []);

  return (
    <>
        <AdminNavBar/>
      <div className="admin">

        <h2>Client :</h2>
        <div className="table_client">
          <thead>
            <tr>
              <th>Id_Client</th>
              <th>Nom_Client</th>
              <th>Prenom_Client</th>
              <th>Mail_Client</th>
              <th>Tel_Client</th>
              <th>Adresse_Client</th>
              <th>Code_Postal_Client</th>
              <th>Ville_Client</th>
            </tr>
          </thead>
          {client.map((e) => {
            return <Client key={e.Id_Client} client={e} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Admin;
