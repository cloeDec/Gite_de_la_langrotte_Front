// Import des bibliothèques React et useState pour gérer les états
import { React, useState } from "react";
// Import du composant Link pour la navigation entre pages
import { Link } from "react-router-dom";
// Import des images utilisées dans la barre de navigation
import Logo from "../Assets/logo.png";
import "../Styles/AdminNavBar.css";
import MenuBurger from "../Assets/icons8-menu-64.png";

// Définition du composant NavBar
function NavBar() {
  // Utilisation du hook useState pour gérer l'état de l'activation du menu burger
  const [isActive, setIsActive] = useState(false);

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setIsActive(false);
  };

  // Rendu du composant NavBar
  return (
    <>
      {/* Conteneur principal de la barre de navigation */}
      <div className="navbaradmin">
        {/* Titre de la barre de navigation avec le logo */}
        <p className="navbar-title">
          Page Admin
        </p>

        {/* Conteneur des liens de navigation */}
        <div className={isActive ? "nav-links active" : "nav-links"}>
          {/* Liens de navigation avec redirection vers différentes pages et fermeture du menu */}
          <Link to={"/admin"} className="lien_nav" onClick={closeMenu}>
            Gites
          </Link>
          <Link to={"/adminclient"} className="lien_nav" onClick={closeMenu}>
            Client
          </Link>
          <Link to={"/adminreservation"} className="lien_nav" onClick={closeMenu}>
           Réservation
          </Link>
         
          {/* Ajouter de nouveaux boutons si nécessaire */}
        </div>

        {/* Icône du menu burger pour les écrans plus petits */}
        <img
          src={MenuBurger}
          alt="menu burger"
          className="menu_burger"
          // Gestion du clic pour activer/désactiver le menu burger
          onClick={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
    </>
  );
}

// Export du composant NavBar pour être utilisé dans d'autres composants
export default NavBar;
