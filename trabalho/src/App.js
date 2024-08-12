import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';

export default function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    fetch(url)
      .then((r) => r.json())
      .then((json) => setNutri(json));
  }, []);

  return (
    <>
      <Navbar />
      <div className='mainContainer'>
        <header>
          <strong className='pageTitle'>React Nutri</strong>
        </header>

        {nutri.map((item) => {
          return (
            <article className='cardContainer' key={item.id}>
              <strong className='cardTitle'>{item.titulo}</strong>
              <img className='cardImage' src={item.capa} alt={item.titulo} />
              <p className='cardSubtitle'>{item.subtitulo}</p>
              <button className='cardButton'>Acessar</button>
            </article>
          );
        })}
      </div>
    </>
  );
}
