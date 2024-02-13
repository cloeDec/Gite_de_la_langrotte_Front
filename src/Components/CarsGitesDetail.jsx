import { Link } from "react-router-dom";
import React from "react";

const CardsGiteDetail = ({ gite }) => {
  return (
    <>
      <div className="card_detail">
        <img src={gite.url_image} />
        <div className="description">
          <p className="name_gite">{gite.Nom_Gite}</p>
          <div className="contain_hover">
            <p>{gite.Nb_Chambre} Chambres</p>
            <p>{gite.Nb_Personnes} Personnes</p>
            <Link to={`/gite/` + gite.ID_Gite} state={gite}><button>
              Voir plus</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsGiteDetail;
