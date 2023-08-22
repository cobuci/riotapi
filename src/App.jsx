import axios from "axios";
import { Fragment, useEffect, useState } from "react";


function App() {

  const [heroes, setHeroes] = useState([{}]);

  const getChamps = () => {
    axios
      .get("https://ddragon.leagueoflegends.com/cdn/13.16.1/data/pt_BR/champion.json")
      .then((res) => { setHeroes(res.data.data) })
  }

  useEffect(() => {
    getChamps()
  }, []);

  const mappedChampions = Object.keys(heroes).map((champion) => ({
    name: heroes[champion].name,
    tags: heroes[champion].tags,
  }));

  return (
    <div>
      {mappedChampions.map((champion , key) => {
        return (
          <Fragment key={key}>
            <p>
              {champion.name}
            </p>
            <p>  {champion.tags}
            </p>   </Fragment>
        )

      })}
    </div>
  );


}

export default App
