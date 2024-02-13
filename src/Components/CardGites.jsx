import { Link } from "react-router-dom";
import React from "react";

const Cards = ({ gite }) => {
  console.log(gite);
  return (
    <>
      <Link to={`/gite/` + gite.ID_Gite} state={gite}>
        <div className="card">
          <img src={gite.url_image} />
          <p className="name_gite">{gite.Nom_Gite}</p>
        </div>
      </Link>
    </>
  );
};

export default Cards;
