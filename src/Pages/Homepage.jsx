// Import de la bibliothèque React et des styles spécifiques pour cette page
import React, { useEffect, useState } from "react";
import "../Styles/HomePage.css";
// Import de l'image utilisée dans cette page
import Blason from "../Assets/Blason_ville_fr_Villemorin_17.svg.png";
import giteService from "../Services/giteService";
import CardGite from "../Components/CardGites";
import avisService from "../Services/avisServices";
import SliderAvis from "../Components/SliderAvis";
import Slider from "../Components/SliderHP";

// Définition du composant HomePage
const HomePage = () => {
  const [gites, setGites] = useState([]);
  const [avis, setAvis] = useState([]);

  const fetchGite = async () => {
    try {
      const response = await giteService.fetchGites();
      console.log(response);
      setGites(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchAvi = async () => {
    try {
      const response = await avisService.fetchAvis();
      console.log(response);
      setAvis(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchGite();
    fetchAvi();
  }, []);

  // Rendu du composant HomePage
  return (
    <div>
      {/* Slider Photo*/}
      <Slider />
      {/* Section de description de la ville */}
      {/* Titre de bienvenue */}
      <h3>Bienvenue à Villemorrin ! </h3>
      <div className="description">
        <div className="text-container">
          {/* Paragraphe de description de Villemorin */}
          <p>
            Villemorin est l’un des plus anciens villages au nord de la
            Saintonge, fondé au VIIIe siècle par les Sarrazins. Il est situé à 4
            km à l’est d’Aulnay de Saintonge et à 20 km de Saint Jean d’Angely,
            future ville thermale. À l'époque, il portait le nom de Villac
            Moricum ou Villae Mauricum, signifiant la demeure du Maure. Deux
            cours d’eau traversent la commune : la Saudrene et le Padôme,
            affluents de la Boutonne.
          </p>
        </div>
        {/* Image du blason de Villemorin */}
        <img
          src={Blason}
          id="blason"
          className="blason-image"
          alt="Blason de Villemorin"
        />
      </div>

      {/* Card des Gites */}
      <h3>Nos gîtes</h3>

      <div className="gite-container">
        {gites.map((e) => {
          return <CardGite key={e.ID_Gite} gite={e} />;
        })}
      </div>

      <h3>Les avis</h3>
      <div className="slider-container">
        <SliderAvis avis={avis} />
      </div>
    </div>
  );
};

// Export du composant HomePage pour être utilisé dans d'autres composants
export default HomePage;
