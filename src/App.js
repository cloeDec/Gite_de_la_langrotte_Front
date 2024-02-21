// Import des fichiers CSS et des composants nécessaires depuis React Router et les pages/personnalisations locales
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/Homepage";
import Gites from "./Pages/Gites";
import GitesDetail from "./Pages/GiteDetail";
import Decouvrir from "./Pages/Decouvrir";
import Contact from "./Pages/Contact";
import Galerie from "./Pages/Galerie";
import Reservation from "./Pages/Reservation";
import Admin from "./Pages/AdminGite";
import AdminClient from "./Pages/AdminClient";
import AdminReservation from "./Pages/AdminReservation";
import AdminProfil from "./Pages/AdminProfil";
import Connexion from "./Components/Connexion";
import { ToastContainer } from "react-toastify";
import ModifGite from "./Pages/AdminModifGite";
import { useState } from "react";
import ResaContext from "./context/ResaContext";

// Définition du composant principal de l'application
function App() {
  const [user, setUser] = useState(null);
  return (
    <ResaContext.Provider value={{ user, setUser }}>
      {/* La div principale de l'application avec la classe "App" */}
      <div className="App">
        {/* Utilisation du composant BrowserRouter pour définir le routage de l'application */}
        <BrowserRouter>
          {/* Inclusion du composant de barre de navigation */}
          <NavBar />
          {/* Définition des routes de l'application à l'aide du composant Routes */}
          <Routes>
            {/* Route pour la page d'accueil */}
            <Route path={"/"} element={<HomePage />} />
            {/* Route pour la page des gîtes */}
            <Route path={"/gites"} element={<Gites />} />
            <Route path={"/gite/:id"} element={<GitesDetail />} />
            {/* Route pour la page de découverte */}
            <Route path={"/decouvrir"} element={<Decouvrir />} />
            {/* Route pour la page de contact */}
            <Route path={"/contact"} element={<Contact />} />
            {/* Route pour la page de galerie */}
            <Route path={"/galerie"} element={<Galerie />} />
            {/* Route pour la page de réservation */}
            <Route path={"/reservation"} element={<Reservation />} />
            <Route path={"/connexion"} element={<Connexion />} />
              <Route path={"/admin"} element={<Admin />} />
              <Route path={"/adminclient"} element={<AdminClient />} />
              <Route path={"/adminreservation"} element={<AdminReservation />} />
              <Route path={"/admin/:id"} element={<ModifGite />} />
              <Route path={"/utilisateur/:id"} element={<AdminProfil />} />
          </Routes>
          {/* Inclusion du composant de pied de page */}
          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </BrowserRouter>
      </div>
    </ResaContext.Provider>
  );
}
// }
// Export du composant principal pour être utilisé ailleurs dans l'application
export default App;


