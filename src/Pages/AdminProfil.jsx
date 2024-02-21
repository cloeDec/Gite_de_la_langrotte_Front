import React, { useEffect, useState } from "react";
import "../Styles/Admin.css";
import { useParams } from "react-router-dom";
import utilisateurService from "../Services/utilisateurService";
import AdminNavBar from "../Components/AdminNavBar";
import { toast } from "react-toastify";


const AdminProfil = () => {
  const { id } = useParams();
  const [uti, setUti] = useState([]);

//   const handleChange = (event) => {
//     const { name, value } = event.currentTarget;
//     setGite({ ...gite, [name]: value });
//   };

  const fetchUtilisateurByID = async () => {
    try {
      const response = await utilisateurService.fetchUtilisateurByID(id);
      console.log(response.data);
      setUti(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeUti = (event) => {
    const { name, value } = event.currentTarget;
    setUti({ ...uti, [name]: value });
    console.log("Utilisateur", uti);
  };

  const handleModifUti = async (e) => {
    e.preventDefault();
    try {
      const response = await utilisateurService.modifyUtiById(uti);
      console.log(response);
      toast.success("Le profil a bien été modifié");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUtilisateurByID();
  }, []);

  return (
    <>
    <AdminNavBar/>
    <p>{uti.user_name}</p>
    <h2>Modifier le profil</h2>
      <form className="add_gite" method="post" onSubmit={handleModifUti}>
        <input
          type="hidden"
          name="Id_admin"
          value={uti.Id_admin}
          onChange={handleChangeUti}	
        />
        <label>
          Nom :
          <input
            type="text"
            name="user_name"
            placeholder="Nom"
            value={uti.user_name}
            required
            onChange={handleChangeUti}
          ></input>
        </label>
        <label>
          {" "}
          Mdp :
          <input
            type="text"
            name="user_mdp"
            placeholder="mdp"
            value={uti.user_mdp}
            required
            onChange={handleChangeUti}
          ></input>
        </label>
        
        <button type="submit" value="Ajouter">
          Enregistrer les modifications
        </button>
      </form>

    </>
  );
};

export default AdminProfil;
