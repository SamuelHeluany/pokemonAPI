import { useState } from "react";
import "./index.css";
import axios from 'axios';

function App() {
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonChosen, setPOkemonChosen] = useState(false)
  const [pokemon, setPokemon] = useState({
    name: pokemonName,
        species: "",
        img: "",
        hp: "",
        attack: "",
        defense: "",
        type: "",
  })

  const searchPokemon = async () => {
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      setPokemon({
        name: pokemonName,
        species: res.data.species.name,
        img: res.data.sprites.front_default,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        type: res.data.types[0].type.name,
      })
      setPOkemonChosen(true)
      console.log(res)
    }
  
    
  return (
    <div className="App">
      <div className="titleSection">
        <h1>Pokemon Stats</h1>
        <input type="text" placeholder="Type your pokemon name here!" onChange={(event) => {setPokemonName(event.target.value)}}/>
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <div className="dislpaySection">
        {!pokemonChosen ? (<h1>Please choose a Pokemon</h1>) : (
          <>
          <img src={pokemon.img} />
          <h2>{pokemon.name}</h2>
          <h3>Attack: {pokemon.attack}</h3>
          <h3>Defense: {pokemon.defense}</h3>
          <h3>Hp: {pokemon.hp}</h3>
          <h4>Species: {pokemon.species}</h4>
          <h4>Type: {pokemon.type}</h4>
          
          
        </>
        )}
      </div>
    </div>
  );
}

export default App;
