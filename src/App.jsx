
import axios from "axios";
import { useEffect, useState } from "react";

import NewCard from "./components/Card/NewCard";

import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";

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
    attribute: heroes[champion].info,
  }));



  const championFilter = (name) => {
    const filteredChamp = []
    if (name === "") {
      getChamps()
    }
    for (let i in heroes) {
      if (heroes[i].name.toLowerCase().includes(name.toLowerCase())) {
        filteredChamp.push(heroes[i])
      }
    }
    setHeroes(filteredChamp)
  }

  const showChampions = mappedChampions.map((champion, key) => {

    return (
      <Grid item md={4} key={key}>
        <NewCard name={champion.name} keyChamp={champion.keyChamp} img={champion.id} description={champion.description} tag={(champion.tags)} attribute={champion.attribute}/>
      </Grid>
    )
  });
  <Navbar championFilter={championFilter} />
  return (
    <div>

      <Container maxWidth='lg'>
        <Grid container spacing={6}>
          {showChampions}
        
        </Grid>
      </Container>

    </div>
  );


}

export default App
