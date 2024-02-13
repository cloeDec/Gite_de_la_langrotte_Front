import React, { useEffect, useState } from "react";
import adminServices from "../Services/adminServices";
import imageServices from "../Services/imageServices";
import AdminNavBar from "../Components/AdminNavBar";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ModifGite = () => {
  const { id } = useParams();
  const [giteModif, setGiteModif] = useState([]);
  const [image, setImage] = useState({});
  const [img, setImg] = useState([]);
  const [equip, setEquip] = useState([]);

  const fetchGiteById = async () => {
    try {
      const response = await adminServices.fetchGiteByID(id);
      setGiteModif(response.data[0]);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  // Ajoute des photos à la base de donnée

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await imageServices.addImage(image);
      toast.success("L'image a bien été ajouté");
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setImage({ ...image, [name]: value });
  };

  const handleChangeBis = (event) => {
    const { name, value } = event.currentTarget;
    setGiteModif({ ...giteModif, [name]: value });
    console.log("gites", giteModif);
  };

  const handleModif = async (e) => {
    e.preventDefault();
    try {
      const response = await adminServices.modifyGiteById(giteModif);
      console.log(response);
      toast.success("Le gite a bien été modifié");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchGiteById();
  }, []);

  return (
    <>
      <AdminNavBar />
      <h2>Modifier un gite</h2>
      <form className="add_gite" method="post" onSubmit={handleModif}>
        <input
          type="hidden"
          name="ID_Gite"
          value={giteModif.ID_Gite}
          onChange={handleChangeBis}
        />
        <label>
          Nom Gite :
          <input
            type="text"
            name="Nom_Gite"
            placeholder="Nom Gite"
            value={giteModif.Nom_Gite}
            required
            onChange={handleChangeBis}
          ></input>
        </label>
        <label>
          {" "}
          Nombres de chambres :
          <input
            type="number"
            name="Nb_Chambre"
            placeholder="Nombres de chambres"
            value={giteModif.Nb_Chambre}
            required
            onChange={handleChangeBis}
          ></input>
        </label>
        <label>
          {" "}
          Nombres de personnes :
          <input
            type="number"
            name="Nb_Personnes"
            placeholder="Nombres de personnes"
            value={giteModif.Nb_Personnes}
            required
            onChange={handleChangeBis}
          ></input>
        </label>
        <label>
          {" "}
          Descriptif :
          <input
            type="text"
            name="Descriptif_Gite"
            placeholder="Descriptif"
            value={giteModif.Descriptif_Gite}
            required
            onChange={handleChangeBis}
          ></input>
        </label>
        <label>
          {" "}
          Adresse :
          <input
            type="text"
            name="Adresse_Gite"
            placeholder="Adresse"
            value={giteModif.Adresse_Gite}
            required
            onChange={handleChangeBis}
          ></input>
        </label>
        <label>
          {" "}
          Prix / jour :
          <input
            type="number"
            name="Prix_Gite"
            placeholder="Prix / jour"
            value={giteModif.Prix_Gite}
            required
            onChange={handleChangeBis}
          ></input>
        </label>
        <button type="submit" value="Ajouter">
          Enregistrer les modifications
        </button>
      </form>

      <h2>Ajouter des photos au gite {giteModif.Nom_Gite}</h2>
      <form
        className="add_image"
        method="post"
        onSubmit={handleAdd}
        encType="multipart/form-data"
      >
        <input
          type="hidden"
          name="Id_image"
          value={image.Id_image}
          onChange={handleChange}
        />
        {/* <input name="url_image" value={image.url_image} type="file" /> */}
        <label>
          Nom de l'image :
          <input
            type="text"
            name="url_image"
            placeholder="Url de l'image"
            value={image.url_image}
            required
            onChange={handleChange}
          ></input>{" "}
        </label>
        <label>
          Image principale :
          <select
            name="img_principale"
            value={image.img_principale}
            onChange={handleChange}
          >
            <option disabled selected>
              Image principale
            </option>
            <option value="1">Oui</option>
            <option value="0">Non</option>
          </select>
        </label>
        <input
          type="hidden"
          name="ID_Gite"
          value={(image.ID_Gite = giteModif.ID_Gite)}
          onChange={handleChange}
        />
        <button type="submit" value="Ajouter">
          Ajouter l'image
        </button>
      </form>

      {img.map((img) => {
        <img key={img.Id_image} value={img.Id_image}>
          {img.url_image}
        </img>;
      })}




    </>
  );
};

export default ModifGite;
