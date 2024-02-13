import React, { useState, useEffect } from "react";
import Sup from "../Assets/trash-outline.svg";
import { toast } from "react-toastify";
import clientServices from "../Services/clientServices";

const AdminGite = ({ client }) => {
  const handleDelete = async (ID) => {
    try {
      await clientServices.deleteClientById(ID);
      toast.success("Le client à bien été supprimé");
    } catch (error) {
      console.error("Erreur lors de la suppression du client : ", error);
    }
  };
  return (
    <> 
      <tbody>
        <tr>
          <td>{client.Id_Client}</td>
          <td>{client. Nom_Client}</td>
          <td>{client.Prenom_Client}</td>
          <td>{client.Mail_Client}</td>
          <td>{client.Tel_Client}</td>
          <td>{client.Adresse_Client}</td>
          <td>{client.Code_Postal_Client}</td>
          <td>{client.Ville_Client}</td>
          <td>
            <button>
              <img
                src={Sup}
                onClick={() => {
                  handleDelete(client.Id_Client);
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