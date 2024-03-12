import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [maxPrice, setMaxPrice] = useState('');
  const [scrapedData, setScrapedData] = useState([]);
  const [loading, setLoading] = useState(false);

  const PriceChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 0) {
      setMaxPrice(value);
    }
  };

  const Submit = (event) => {
    event.preventDefault();
    
    setLoading(true);

    axios.post('http://localhost:5000/api/scrape', {
      maxPrice,
    })
      .then((response) => {
        console.log('Réponse de l\'API Flask:', response.data);
        setScrapedData(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la communication avec l\'API Flask:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClick = (url) => {
    window.open(url, '_blank');
  };


  return (
    <>
      <div className="home">
        <h2>Configurer votre recherche</h2>
        <form onSubmit={Submit}>
        <div>
            <label>pays :</label>
            <input
              type="number"
              value={maxPrice}
              onChange={PriceChange}
              placeholder="Entrez le prix maximal"
            />
          </div>
          <div>
            <label>Prix maximal :</label>
            <input
              type="number"
              value={maxPrice}
              onChange={PriceChange}
              placeholder="Entrez le prix maximal"
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div className="liens">
        <h2>Réponses :</h2>
        {loading ? (
          <p>Chargement en cours...</p>
        ) : (
          <div className="countaner_liens">
            {scrapedData.map((item, index) => (
              <div key={index} className="countaner_lien" onClick={() => handleClick(item.lien)}>
                <a href={item.lien} target="_blank" rel="noopener noreferrer">{item.titre}</a> <br></br>
                <span>
                  Prix : {item.prix} €
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
