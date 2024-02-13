import React, { useEffect, useState } from "react";
import "../Styles/Admin.css";
import { useParams } from "react-router-dom";
import adminService from "../Services/adminServices";
import AdminComponent from "../Components/AdminGite";
import AdminNavBar from "../Components/AdminNavBar";
import { toast } from "react-toastify";


const Admin = () => {
  const { id } = useParams();
  const [gites, setGites] = useState([]);
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
  }, []);

  return (
    <>
    <AdminNavBar/>
      <div className="admin">
         <h2>Gites :</h2>
        <div className="table_gite">
          <thead>
            <tr>
              <th>Nom du Gite</th>
              <th>Nombres de chambres</th>
              <th>Nombre de personnes</th>
              <th>Descriptif</th>
              <th>Adresse</th>
              <th>Prix/jour</th>
            </tr>
          </thead>
          {gites.map((e) => {
            return <AdminComponent key={e.ID_Gite} gite={e} />;
          })}{" "}
        </div>

        <h2>Ajouter un gite</h2>
        <form className="add_gite" method="post" onSubmit={handleAdd}>
          <input
            type="text"
            name="Nom_Gite"
            placeholder="Nom Gite"
            value={gite.Nom_Gite}
            required
            onChange={handleChange}
          ></input>
          <input
            type="number"
            name="Nb_Chambre"
            placeholder="Nombres de chambres"
            value={gite.Nb_Chambre}
            required
            onChange={handleChange}
          ></input>
          <input
            type="number"
            name="Nb_Personnes"
            placeholder="Nombres de personnes"
            value={gite.Nb_Personnes}
            required
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="Descriptif_Gite"
            placeholder="Descriptif"
            value={gite.Descriptif_Gite}
            required
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="Adresse_Gite"
            placeholder="Adresse"
            value={gite.Adresse_Gite}
            required
            onChange={handleChange}
          ></input>
          <input
            type="number"
            name="Prix_Gite"
            placeholder="Prix / jour"
            value={gite.Prix_Gite}
            required
            onChange={handleChange}
          ></input>
          <button type="submit" value="Ajouter">
            Ajouter
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
