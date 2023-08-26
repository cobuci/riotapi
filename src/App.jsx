
import axios from "axios";
import { useEffect, useState } from "react";
import ChampionCard from "./components/ChampionCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import NewCard from "./components/NewCard";


function App() {

  const [heroes, setHeroes] = useState([{}])

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
    id: heroes[champion].id,
    tags: heroes[champion].tags,
    description: heroes[champion].title,
    keyChamp: heroes[champion].key,
  }));


  const championFilter = (name) => {
    const filteredChamp = []
    if (name ===""){
      getChamps()
    }
    for (let i in heroes) {
      if (heroes[i].name.includes(name)) {
        filteredChamp.push(heroes[i])
      }
    }
    setHeroes(filteredChamp)
  }

  const showChampions = mappedChampions.map((champion, key) => {
    return (
      <Grid md={4} key={key}>
        <NewCard name={champion.name} keyChamp={champion.keyChamp} img={champion.id} description={champion.description} />
      </Grid>
    )
  });

  return (
    <div>
      <Navbar championFilter={championFilter} />
      <Container maxWidth='xg'>
        <Grid container spacing={2}>
          {showChampions}
        </Grid>
      </Container>

    </div>
  );


}

export default App
