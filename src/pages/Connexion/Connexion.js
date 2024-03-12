import React, { useState } from 'react';
import './Connexion.css';

const Connexion = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className={`home ${showLogin ? '' : 'flipped'}`}>
      <h2 className={showLogin ? '' : 'inscription'}>
        {showLogin ? 'Connexion' : 'Inscription'}
      </h2>
      <div className="form-container">
        {showLogin ? (
          <div className="login-form">
            <div className="text-mirror">Connexion</div>
            <form>
              <label htmlFor="nom">Nom:</label>
              <input type="text" id="nom" name="nom" required />
              <label htmlFor="password">Mot de passe:</label>
              <input type="password" id="password" name="password" required />
              <button type="submit">Se connecter</button>
            </form>
            <button onClick={toggleForm}>Je suis nouveau</button>
          </div>
        ) : (
          <div className="inscription-form">
            <div className="text-mirror">Inscription</div>
            <form>
              <label htmlFor="nom">Nom:</label>
              <input type="text" id="nom" name="nom" required />
              <label htmlFor="prenom">Prénom:</label>
              <input type="text" id="prenom" name="prenom" required />
              <label htmlFor="adresse">Adresse:</label>
              <input type="text" id="adresse" name="adresse" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="telephone">Téléphone:</label>
              <input type="tel" id="telephone" name="telephone" />
              <button type="submit">S'inscrire</button>
            </form>
            <button onClick={toggleForm}>Je suis deja inscrit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Connexion;
