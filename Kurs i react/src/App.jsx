import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="app">
      {data.map((kunde, index) => (
        <div key={index} className="data-card">
          <p><span className="data-label">Navn:</span> {kunde.navn}</p>
          <p><span className="data-label">Adresse:</span> {kunde.adresse}</p>
          <p><span className="data-label">Telefonnummer:</span> {kunde.telefonnummer}</p>
          <p><span className="data-label">E-postadresse:</span> {kunde.epostadresse}</p>
        </div>
      ))}
    </div>
  );
}

export default App;