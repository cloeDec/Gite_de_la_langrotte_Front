import React, {useEffect, useState} from "react";
import "../Styles/Gite.css";
import PhotoLaRochelle from "../Assets/35381133.webp";
import giteService from "../Services/giteService";
import CardGiteDetail from "../Components/CarsGitesDetail";

const Gites = () => {

  const [gites, setGites] = useState([]);

  const fetchGite = async () => {
      try {
          const response = await giteService.fetchGites();
          console.log(response)
          setGites(response.data)
      } catch (e) {
          console.log(e)
      }
  }

  useEffect(() => {
      fetchGite();
  }, []);

  return (
    <body>
      <img src={PhotoLaRochelle} className="pictures_gites" alt="Photo de La Rochelle" />

      <div className="title">
        <h3>Nos Gites </h3>
      </div>

      <div className="gite-contain">
            {gites.map((e) => {
              return <CardGiteDetail key={e.ID_Gite} gite={e} />;
            })}
          </div>

    </body>
  );
};

export default Gites;
