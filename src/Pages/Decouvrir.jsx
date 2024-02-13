// Import de la bibliothèque React et des styles spécifiques pour cette page
import React from "react";
import "../Styles/Decouvrir.css";
// Import des images utilisées dans cette page
import PhotoElephant from "../Assets/ARCHITECTURE_-_ZOO_DE_LA_FLECHE-81.jpg";
import PhotoHuitres from "../Assets/960x614_image-illustration-plateau-huitres.webp";
import PhotoMarche from "../Assets/0f3085b0-68ce-11e8-bbf2-0242ac110009.jpg";
import PhotoLaRochelle from "../Assets/35381133.webp";
import PhotoRochefort from "../Assets/Rochefort-Ville-Art-et-Histoire.jpg";
import PhotoCarte from "../Assets/carte-lecture-femme-anonyme.jpg";

// Définition du composant Decouvrir
const Decouvrir = () => {
  // Rendu du composant Decouvrir
  return (
    <body>
      {/* Section "A proximité" */}
      <section className="proximite">
        <div className="text-container">
          <h3>A proximité</h3>
          <ul>
            <li>
              Aulnay de Saintonge :
              <ul>
                <li>La tour</li>
                <li>Le pigonnier</li>
                <li>L’église</li>
                <li>
                  Cimetière Gallo-Romain avec des tombes du XVII et XIX siècle
                </li>
                <li>Jardin Médiéval</li>
              </ul>
            </li>
            <li>Zoo Chizé</li>
            <li>
              Saint Jean d’Angely :
              <ul>
                <li>La tour d’Horloge</li>
                <li>Les maisons à Pont de Bois</li>
                <li>L’Abbaye Royale</li>
              </ul>
            </li>
            <li>Dampierre sur Boutonne</li>
            <li>Asinerie du Baudet du Poitou</li>
            <li>Chemin de Compostelle</li>
          </ul>
        </div>
        {/* Image associée à la section "A proximité" */}
        <img
          src={PhotoElephant}
          className="pictures"
          alt="Photo d'un Elephant"
        />
      </section>

      {/* Section "A déguster" */}
      <section className="deguster">
        <img
          src={PhotoHuitres}
          className="pictures"
          alt="Photo plateau d'huitres"
        />
        <div className="text-container">
          <h3>A déguster</h3>
          <ul>
            <li>Le Pineau</li>
            <li>Le Cognac</li>
            <li>Galette Charentaise</li>
            <li>Escargots</li>
            <li>Huitres</li>
          </ul>
        </div>

      </section>

      {/* Section "Les Marchés" */}
      <section className="marches">
        <div className="text-container">
          <h3>Les Marchés</h3>
          <ul>
            <li>
              Aulnay
              <ul>
                <li>Dimanche</li>
                <li>Jeudi</li>
              </ul>
            </li>
            <li>
              Saint Jean d’Angely
              <ul>
                <li>Samedi</li>
                <li>Mercredi</li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Image associée à la section "Les Marchés" */}
        <img src={PhotoMarche} className="pictures" alt="Photo du marché" />
      </section>

      {/* Section "Un peu plus loin" */}
      <section className="un-peu-plus-loin">
        {/* Images associées à la section "Un peu plus loin" */}
        <div className="image-container">
          <img
            src={PhotoLaRochelle}
            className="pictures"
            alt="Photo de la Rochelle"
          />
          <img
            src={PhotoRochefort}
            className="pictures"
            alt="Photo de Rochefort"
          />
        </div>
        <div className="text-container">
          <h3>Un peu plus loin</h3>
          <ul>
            <li>
              La Rochelle
              <ul>
                <li>Les tours</li>
                <li>Le Port</li>
                <li>L’Aquarium</li>
              </ul>
            </li>
            <li>Melle</li>
            <li>
              Le Marais Poitevin
              <ul>
                <li>Coulon</li>
                <li>Ballade en barque</li>
              </ul>
            </li>
            <li>
              Rochefort
              <ul>
                <li>Conderie</li>
                <li>L’Hermine</li>
                <li>Maison Pierre Lotry</li>
                <li>Musée du Begonia</li>
              </ul>
            </li>
            <li>Château de la roche Courbon</li>
            <li>Zoo de la Palmyre</li>
            <li>
              Ile d’Oléron
              <ul>
                <li>Phare de Chassiron</li>
                <li>Port de la Cotinière</li>
                <li>Bovarville</li>
              </ul>
            </li>
            <li>
              Ile de Ré
              <ul>
                <li>La Flotte en Ré</li>
                <li>Marais Salans</li>
              </ul>
            </li>
            <li>
              Ile d’Aix
              <ul>
                <li>Musée Napoléon</li>
              </ul>
            </li>
            <li>
              Ile Madame
              <ul>
                <li>Balade en Calèche</li>
              </ul>
            </li>
            <li>
              Marennes
              <ul>
                <li>Capitale de l’Huitre</li>
              </ul>
            </li>
            <li>Saintes </li>
            <li>
              Fouras
              <ul>
                <li>Fort Vauban</li>
              </ul>
            </li>
          </ul>
        </div>

      </section>

      {/* Section "Départements limitrophes" */}
      <section className="departements-limitrophes">
        <div className="text-container">
          <h3>Départements limitrophes</h3>
          <ul>
            <li>
              <li>Cognac</li>
              <li>
                Angoulême{" "}
                <ul>
                  <li>festival de la BD</li>
                </ul>
              </li>
            </li>
            <li>
              Poitiers{" "}
              <ul>
                <li>Futuroscope</li>
              </ul>
            </li>
          </ul>
        </div>
        <img
          src={PhotoCarte}
          className="pictures"
          alt="Photo d'une femme tenant une carte'"
        />
      </section>
    </body>
  );
};

// Export du composant Decouvrir pour être utilisé dans d'autres composants
export default Decouvrir;
