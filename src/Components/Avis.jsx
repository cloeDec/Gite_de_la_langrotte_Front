import React from "react";

const Avis = ({avis}) => {
  return (
    <>
    <div className="avis-container">
      <h4>{avis.Prenom_Client}</h4>
      <p>{avis.Avis_Client}</p>
      </div>
    </>
  );
};

export default Avis;


