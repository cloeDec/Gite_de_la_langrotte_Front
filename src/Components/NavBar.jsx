// Import des bibliothèques React et useState pour gérer les états
import { React, useState } from "react";
// Import du composant Link pour la navigation entre pages
import { Link } from "react-router-dom";
// Import des images utilisées dans la barre de navigation
import Logo from "../Assets/logo.png";
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
      <div className="navbar">
        {/* Titre de la barre de navigation avec le logo */}
        <p className="navbar-title">
          Les gites de La Langrotte
          <img src={Logo} id="logo" alt="Logo" placeholder="Logo" />
        </p>

        {/* Conteneur des liens de navigation */}
        <div className={isActive ? "nav-links active" : "nav-links"}>
          {/* Liens de navigation avec redirection vers différentes pages et fermeture du menu */}
          <Link to={"/"} className="lien_nav" onClick={closeMenu}>
            Acceuil
          </Link>
          <Link to={"/gites"} className="lien_nav" onClick={closeMenu}>
            Les gites
          </Link>
          <Link to={"/decouvrir"} className="lien_nav" onClick={closeMenu}>
            A découvrir
          </Link>
          <Link to={"/contact"} className="lien_nav" onClick={closeMenu}>
            Me contacter
          </Link>
          <Link to={"/galerie"} className="lien_nav" onClick={closeMenu}>
            Galerie Photo
          </Link>
          {/* Lien de réservation avec un bouton */}
          <Link to={"/reservation"} className="lien_nav" onClick={closeMenu}>
            <button>Réservation</button>
          </Link>{" "}
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

