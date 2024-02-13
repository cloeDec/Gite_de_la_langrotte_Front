import React, { useState } from "react";
import "../Styles/Contact.css";
import { toast } from "react-toastify";
import PhotoYacht from "../Assets/yacht-reflet-coucher-soleil-port.jpg";
import mailerServices from "../Services/mailerServices";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    sujet: "Demande d'info",
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    message: "",
  });

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mailerServices.sendMail(formData);
      toast.success("Email envoyé avec succès!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      toast.error("Le mail n'a pas pu s'envoyer", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <body>
      <img
        src={PhotoYacht}
        className="pictures_contact"
        alt="Photo de Yachts"
      />
      {/* <!-- Formulaire de contact--> */}
      <form method="post" className="contact-form" onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            required
            onChange={handleChange}
          />
        </div>
        <div className="contact-info">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            name="tel"
            placeholder="Téléphone"
            required
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          placeholder="Votre message"
          required
          onChange={handleChange}
        ></textarea>
        <ReCAPTCHA
          sitekey="6Ldap2spAAAAAFwRexCLmI2G7GaNleRGmx53hgmJ"
          onChange={onChange}
        />
        , <button type="submit">Envoyer</button>
      </form>

      <div className="location-container">
        {/* Adresse pour la réservation */}
        <p>4 Pt Rue Petite Rue, 17470 Villemorin</p>

        {/* Carte Google Maps intégrée pour afficher l'emplacement */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d740.2322964112257!2d-0.2957424836662609!3d46.00308085479491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4800b894050b61db%3A0x512f0452e7d61b5a!2s4%20Pt%20Rue%20Petite%20Rue%2C%2017470%20Villemorin!5e1!3m2!1sfr!2sfr!4v1705333900777!5m2!1sfr!2sfr"
          width="600"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </body>
  );
};

export default Contact;
