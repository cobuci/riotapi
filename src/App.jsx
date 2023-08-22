import { useEffect, useState } from "react";


function App() {


  const buscarDados = async () => {
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.16.1/data/pt_BR/champion.json');
    const data = await response.json();
    return data.data;
  };
  
  
  const ApiRiot = () => {
    const [heroes, setHeroes] = useState([]);
  
    useEffect(() => {
      const heroesPromise = buscarDados();
      Promise.all([heroesPromise]).then(heroes => {
        setHeroes(heroes.map(hero => Object.entries(hero)));
      });
    }, []);
  
    return (
      <div>
        <h1>Heroes</h1>
        {heroes}
      </div>
    );
  
  };
  return (
    <>
      {ApiRiot()}
    </>
  )
}

export default App
