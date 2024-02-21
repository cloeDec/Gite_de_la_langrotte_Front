import React from "react";
import { useState, useContext } from "react";
import utilisateurService from "../Services/utilisateurService";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Connexion = () => {
  const [utilisateur, setUtilisateur] = useState({});
  const navigate = useNavigate();
  const {isAuthenticated, setisAuthenticated} = useContext(AuthContext)

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUtilisateur({ ...utilisateur, [name]: value });
  };

  const handleConn = async (e) => {
    e.preventDefault();
    try {
      const response = await utilisateurService.loginUtilisateur(utilisateur);
      console.log(response);
      axios.defaults.headers["Authorization"] = "Bearer " + response.data; //ajouter .data aprés response pour protéger la page
      toast.success("Vous êtes est connecté");
      setisAuthenticated(true);
      console.log(isAuthenticated);
      navigate("/admin"); //dirige sur la page admin
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form method="post" onSubmit={handleConn}>
        <h1>Connexion</h1>
        {/* <!-- Champs pour entrer l'email et le mot de passe --> */}
        <input
          type="text"
          name="user_name"
          placeholder="Nom Utilisateur"
          value={utilisateur.user_name}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="user_mdp"
          placeholder="Mot de passe"
          value={utilisateur.user_mdp}
          onChange={handleChange}
          required
        />

        <button type="submit" value="Se connecter">
          Se connecter
        </button>
      </form>
    </>
  );
};

export default Connexion;