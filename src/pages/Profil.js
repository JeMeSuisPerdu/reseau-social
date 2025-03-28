import React, { useContext } from "react";
import Log from "../components/Log/index";
import { UidContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil />
      ) : (
        <div className="log-container">
          <Log />
          <div className="img-container">
            <img src="./img/log.svg" alt="Illustration de l'accueil" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
