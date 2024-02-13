import React from "react";
import "../Styles/Galerie.css";
import PhotoMouette from "../Assets/mouette-blanche-survolant-cote.jpg";
import PhotoRochefort from "../Assets/Rochefort-Ville-Art-et-Histoire.jpg";
import PhotoYacht from "../Assets/yacht-reflet-coucher-soleil-port.jpg";
import PhotoBateau from "../Assets/bateaux-dans-port-rovinj-croatie.jpg";
import PhotoLaRochelle from "../Assets/35381133.webp";
import PhotoPlage from "../Assets/vue-verticale-rochers-plage-palombaggia.jpg";
// import Gite1_1 from "../Assets/echapee-belle/bar-nature-morte-gateau.jpg";
// import Gite1_2 from "../Assets/echapee-belle/chambre-luxe-detente-hotel.jpg";
// import Gite1_3 from "../Assets/echapee-belle//design-interieur-cadre-photo-plante.jpg";
// import Gite1_4 from "../Assets/echapee-belle/interieur-salle-manger.jpg";
// import Gite1_5 from "../Assets/echapee-belle/village-anglais-cotswolds.jpg";
// import Gite2_1 from "../Assets/maison-coquelicots/beau-design-interieur-cuisine-verte.jpg";
// import Gite2_2 from "../Assets/maison-coquelicots/jeunes-amis-dans-auberge.jpg";
// import Gite2_3 from "../Assets/maison-coquelicots/rue-medievale.jpg";
// import Gite2_4 from "../Assets/maison-coquelicots/salon-moderne-elegant-canapes-confortables-ai-generative.jpg";
// import Gite3_1 from "../Assets/nid-douillet/belle-vue-lac-bleu-capture-interieur-villa.jpg";
// import Gite3_2 from "../Assets/nid-douillet/chambre-moderne-vide-meubles.jpg";
// import Gite3_3 from "../Assets/nid-douillet/maison-medievale.jpg";
// import Gite4_1 from "../Assets/oasis-des-pres/construction-europeenne-repere-vue-etroit.jpg";
// import Gite4_2 from "../Assets/oasis-des-pres/cuisine-aux-murs-blancs-aux-armoires-blanches.jpg";
// import Gite4_3 from "../Assets/oasis-des-pres/mode-vie(1).jpg";
// import Gite4_4 from "../Assets/oasis-des-pres/mode-vie.jpg";
// import Gite5_1 from "../Assets/refuge-champetre/plan-interieur-cuisine-maison-moderne-grandes-fenetres.jpg";
// import Gite5_2 from "../Assets/refuge-champetre/rue-medievale1.jpg";
// import Gite5_3 from "../Assets/refuge-champetre/salon-scandinave-elegant-meubles-canape-design-menthe-maquette-affiche-carte-plantes-eleg.jpg";


const Galerie = () => {
  return (
    <body>
      <div className="galerie-container">
      <img src={PhotoMouette} className="pictures" alt="Photo d'une Mouette" />
      <img src={PhotoRochefort} className="pictures" alt="Photo de Rochefort" />
      <img src={PhotoYacht} className="pictures" alt="Photo de Yachts" />
      <img src={PhotoBateau} className="pictures" alt="Photo de bateau" />
      <img src={PhotoLaRochelle} className="pictures" alt="Photo de la Rochelle" />
      <img src={PhotoPlage} className="pictures" alt="Photo d'une Plage" />
      {/* <img src={Gite1_1} className="pictures" alt="Photo du Gite Echapée Belle" />
      <img src={Gite1_2} className="pictures" alt="Photo du Gite Echapée Belle" />
      <img src={Gite1_3} className="pictures" alt="Photo du Gite Echapée Belle" />
      <img src={Gite1_4} className="pictures" alt="Photo du Gite Echapée Belle" />
      <img src={Gite1_5} className="pictures" alt="Photo du Gite Echapée Belle" />
      <img src={Gite2_1} className="pictures" alt="Photo du Gite Maison Coquelicots" />
      <img src={Gite2_2} className="pictures" alt="Photo du Gite Maison Coquelicots" />
      <img src={Gite2_3} className="pictures" alt="Photo du Gite Maison Coquelicots" />
      <img src={Gite2_4} className="pictures" alt="Photo du Gite Maison Coquelicots" />
      <img src={Gite3_1} className="pictures" alt="Photo du Gite Nid Douillet" />
      <img src={Gite3_2} className="pictures" alt="Photo du Gite Nid Douillet" />
      <img src={Gite3_3} className="pictures" alt="Photo du Gite Nid Douillet" />
      <img src={Gite4_1} className="pictures" alt="Photo du Gite Oasis des Près" />
      <img src={Gite4_2} className="pictures" alt="Photo du Gite Oasis des Près" />
      <img src={Gite4_3} className="pictures" alt="Photo du Gite Oasis des Près" />
      <img src={Gite4_4} className="pictures" alt="Photo du Gite Oasis des Près" />
      <img src={Gite5_1} className="pictures" alt="Photo du Gite Refuge Champêtre" />
      <img src={Gite5_2} className="pictures" alt="Photo du Gite Refuge Champêtre" />
      <img src={Gite5_3} className="pictures" alt="Photo du Gite Refuge Champêtre" /> */}


      </div>
    </body>
  );
};

export default Galerie;
