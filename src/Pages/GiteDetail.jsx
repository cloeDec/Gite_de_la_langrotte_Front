import React, { useEffect, useState } from "react";
import "../Styles/GiteDetail.css";
import { useParams } from "react-router-dom";
import Gites from "../Services/giteService";
import Equipement from "../Components/Equipement";
import Equip from "../Services/equipementServices";
import Img from "../Services/imageServices";
import SliderImage from "../Components/SliderImage";

const GiteDetail = () => {
  const { id } = useParams();
  const [gitedetail, setGitedetail] = useState([]);
  const [equip, setEquip] = useState([]);
  const [image, setImage] = useState([]);

  const fetchGiteById = async () => {
    try {
      Gites.fetchGiteById(id).then((response) => {
        console.log(response);
        setGitedetail(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const fetchEquipementById = async () => {
    try {
      Equip.fetchEquipementById(id).then((response) => {
        console.log(response);
        setEquip(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const fetchImageById = async () => {
    try {
      Img.fetchImageById(id).then((response) => {
        console.log(response);
        setImage(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchGiteById();
    fetchEquipementById();
    fetchImageById();
  }, []);

  return (
    <body>
      <div>
        <img
          src={gitedetail.url_image}
          className="pictures_gites_detail"
          alt="Photo du gite"
        />
        <div className="title_detail">
          <h3>{gitedetail.Nom_Gite}</h3>
          <p>
            {gitedetail.Nb_Personnes} Personnes/
            {gitedetail.Nb_Chambre} Chambres
          </p>
        </div>
        <div className="descriptif">{gitedetail.Descriptif_Gite}</div>

        <SliderImage image={image} />
        <h3>Les équipements</h3>
        <div className="equip-container">
          {equip.map((e) => {
            return <Equipement key={e.ID_Gite} equip={e} />;
          })}
        </div>
      </div>{" "}
    </body>
  );
};

export default GiteDetail;
