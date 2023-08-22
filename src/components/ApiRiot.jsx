import { useState } from "react";

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
        setHeroes(heroes);
      });
    }, []);
  
    return (
      <div>
        <h1>Heroes</h1>
        {heroes.map(hero => (
          <div key={hero.key}>
            <h2>{hero.name}</h2>
            <p>{hero.title}</p>
          </div>
        ))}
      </div>
    );
  };


  export default ApiRiot()