import React, {useState} from 'react';
import axios from 'axios';

const PokemonDisplay = (props) =>{
    const [pokemons, setPokemons] = useState([]);

    const handleClick = (e) =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
            setPokemons(response.data.results.map(item => item.name));
        });
    }

    return (
        <>
            <button onClick={ handleClick }>Fetch Pokemons</button>
            
            <ul>
                {
                    pokemons.map(item =>
                    <li>{item}</li>
                    )
                }
            </ul>
        </>
    );
}
export default PokemonDisplay;