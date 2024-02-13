import React, { useState, useEffect } from "react";
import adminService from "../Services/adminServices";
import Sup from "../Assets/trash-outline.svg";
import Modif from "../Assets/pencil-outline.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminGite = ({ gite }) => {
  const [gites, setGites] = useState([]);
  const [active, setActive] = useState(false);
  const [currentGites, setCurrentGites] = useState(gites);
  const navigate = useNavigate();

  const handleDelete = async (ID) => {
    try {
      await adminService.deleteGiteById(ID);
      toast.success("Le gite à bien été supprimé");
    } catch (error) {
      console.error("Erreur lors de la suppression du gite : ", error);
    }
  };

  const handleModify = async (ID_Gite) => {
    try {
      await adminService.modifyGiteById(gites.ID_Gite, currentGites);
      navigate("/admin/" + ID_Gite);
    } catch (error) {
      console.log("Erreur lors de la modification du gite : ", error);
    }
  };

  return (
    <>
      <tbody>
        <tr>
          <td>{gite.Nom_Gite}</td>
          <td>{gite.Nb_Chambre}</td>
          <td>{gite.Nb_Personnes}</td>
          <td>{gite.Descriptif_Gite}</td>
          <td>{gite.Adresse_Gite}</td>
          <td>{gite.Prix_Gite}</td>
          <td>
            <button>
              <img
                src={Modif}
                onClick={() => {
                  handleModify(gite.ID_Gite);
                }}
              />
            </button>
            <button>
              <img
                src={Sup}
                onClick={() => {
                  handleDelete(gite.ID_Gite);
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
