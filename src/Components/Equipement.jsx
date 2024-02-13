import { Link } from "react-router-dom";
import React from "react";

const Equip = ({ equip }) => {
  console.log(equip);
  return (
    <>
      <li className="name_equip">{equip.Nom_Equipement}</li>
    </>
  );
};

export default Equip;
