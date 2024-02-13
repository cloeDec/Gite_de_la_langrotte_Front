// Import de la bibliothèque React et des styles spécifiques pour cette page
import React, { useContext, useEffect, useState } from "react";
import "../Styles/Reservation.css";
import avisService from "../Services/avisServices";
import SliderAvis from "../Components/SliderAvis";
import reservationService from "../Services/reservationServices";
import clientService from "../Services/clientServices";
import giteService from "../Services/giteService";
import PhotoBateaux from "../Assets/bateaux-dans-port-rovinj-croatie.jpg";
import { toast } from "react-toastify";
import ResaContext from "../context/ResaContext";
import ReCAPTCHA from "react-google-recaptcha";

// Définition du composant Reservation
const Reservation = () => {
  const [gites, setGites] = useState([]);
  const [isActive, setIsActive] = useState(false);

  // Rendu du composant Reservation
  const { user, setUser } = useContext(ResaContext);
  const [avis, setAvis] = useState([]);
  const [reserv, setReserv] = useState({
    Date_debut_resa: "",
    Date_fin_resa: "",
    Nb_personnes: "",
    Statut: "",
    Id_Client: "",
    ID_Gite: "",
  });
  const [client, setClient] = useState({
    Id_Client: "",
    Nom_Client: "",
    Prenom_Client: "",
    Mail_Client: "",
    Tel_Client: "",
    Adresse_Client: "",
    Code_Postal_Client: "",
    Ville_Client: "",
  });

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const fetchGite = async () => {
    try {
      const response = await giteService.fetchGites();
      setGites(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeReserv = (event) => {
    const { name, value } = event.currentTarget;
    setReserv({ ...reserv, [name]: value });
  };

  const handleChangeClient = (event) => {
    const { name, value } = event.currentTarget;
    setClient({ ...client, [name]: value });
  };

  const handleAddReserv = async (e) => {
    e.preventDefault();
    try {
      const response = await reservationService.addReservation(reserv);
      console.log(response);
      toast.success("La demande de réservation a bien été transmisse");
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddClient = async (e) => {
    e.preventDefault();
    try {
      const response = await clientService.addClient(client);
      setUser(response.data); // récupère l'Id client généré juste avant
      toast.success("La demande de réservation a bien été transmisse");
    } catch (e) {
      console.log(e);
    }
  };

  const fetchAvi = async () => {
    try {
      const response = await avisService.fetchAvis();
      setAvis(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAvi();
    fetchGite();
  }, []);

  return (
    <body>
      <img
        src={PhotoBateaux}
        className="pictures_reserv"
        alt="Photo de Yachts"
      />
      {/* Section de réservation */}
      <div className="form"></div>
      <form
        className={isActive ? "client-form active" : "client-form"}
        method="post"
        onSubmit={handleAddClient}
      >
        <div className="input-container">
          <input
            type="text"
            pattern="[a-z0-9_-]"
            name="Nom_Client"
            placeholder="Nom"
            value={client.Nom_Client}
            required
            onChange={handleChangeClient}
          />
          <input
            type="text"
            pattern="[a-z0-9_-]"
            name="Prenom_Client"
            placeholder="Prénom"
            value={client.Prenom_Client}
            required
            onChange={handleChangeClient}
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            name="Mail_Client"
            placeholder="Email"
            value={client.Mail_Client}
            required
            onChange={handleChangeClient}
          />
          <input
            type="tel"
            pattern="0[1-9][0-9]{8}"
            name="Tel_Client"
            placeholder="Téléphone"
            value={client.Tel_Client}
            required
            onChange={handleChangeClient}
          />
        </div>
        <div className="input-container-large">
          <input
            type="text"
            pattern="[a-z0-9_-]"
            name="Adresse_Client"
            placeholder="Adresse"
            value={client.Adresse_Client}
            required
            onChange={handleChangeClient}
          />{" "}
        </div>
        <div className="input-container">
          <input
            type="number"
            pattern="[0-9]{5}"
            name="Code_Postal_Client"
            placeholder="Code Postal"
            value={client.Code_Postal_Client}
            required
            onChange={handleChangeClient}
          />
          <input
            type="text"
            pattern="[a-z0-9_-]"
            name="Ville_Client"
            placeholder="Ville"
            value={client.Ville_Client}
            required
            onChange={handleChangeClient}
          />
        </div>
        <button
          type="submit"
          value="Envoyer"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          Etape suivante
        </button>
      </form>
      <form
        className={isActive ? "reserve-form active" : "reserve-form"}
        method="post"
        onSubmit={handleAddReserv}
      >
        <input
          type="hidden"
          name="Id_Client"
          required
          value={(reserv.Id_Client = user)}
          onChange={handleChangeReserv}
        />
        <div className="date-container">
          <input
            placeholder="Date d'arrivée"
            className="textbox-n"
            type="text"
            onFocus={(e) => {
              e.target.type = "date";
            }}
            onBlur={(e) => {
              e.target.type = "text";
            }}
            name="Date_debut_resa"
            required
            value={reserv.Date_debut_resa}
            onChange={handleChangeReserv}
          />
          <input
            placeholder="Date de départ"
            className="textbox-n"
            type="text"
            onFocus={(e) => {
              e.target.type = "date";
            }}
            onBlur={(e) => {
              e.target.type = "text";
            }}
            name="Date_fin_resa"
            required
            value={reserv.Date_fin_resa}
            onChange={handleChangeReserv}
          />
        </div>
        <div className="input-container">
          <select
            name="ID_Gite"
            value={reserv.ID_Gite}
            onChange={handleChangeReserv}
          >
            <option value={""} disabled selected>
              Choissisez votre Gite
            </option>
            {gites.map((gite) => (
              <option key={gite.ID_Gite} value={gite.ID_Gite}>
                {gite.Nom_Gite}
              </option>
            ))}
          </select>
          <input
            min={1}
            max={8}
            type="number"
            name="Nb_personnes"
            placeholder="Nombre de personne"
            required
            value={reserv.Nb_personnes}
            onChange={handleChangeReserv}
          />
        </div>
        <p>
          Ce formulaire enveras une demande de réservation, à la validation de
          celle-ci vous receverez un mail de confirmation
        </p>
        <ReCAPTCHA
          sitekey="6Ldap2spAAAAAFwRexCLmI2G7GaNleRGmx53hgmJ"
          onChange={onChange}
        />
        <button
          type="submit"
          value="Envoyer"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          Envoyer
        </button>
      </form>

      <h3>Les avis</h3>
      <div className="slider-container">
        <SliderAvis avis={avis} />
      </div>
    </body>
  );
};

// Export du composant Reservation pour être utilisé dans d'autres composants
export default Reservation;
