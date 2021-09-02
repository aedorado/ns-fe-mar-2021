import { props } from "bluebird";
import { useEffect, useState } from "react";
import './App.css';

export default function Pokelist() {
    return (
        <>
            <PokemonCards></PokemonCards>
        </>
    );
}

function PokemonCards() {

    const inc = 10;
    const [offset, setOffset] = useState(0);
    const [pokemonList, setPokemonList] = useState([]);

    let next = () => {
        setOffset(offset + inc);
    }

    let prev = () => {
        if (offset >= 10) {
            setOffset(offset - inc);
        }
    }

    useEffect(() => {
        // fetches the data
        const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPokemonList(data.results));
    }, [offset]);

    return (
        <>
        {
            pokemonList.length > 0 &&
                pokemonList.map(pokemon => <PokemonCard key={pokemon.url} pokemon={pokemon}></PokemonCard>)
        }
        <br />
        <NavButtons next={next} prev={prev} />
        </>
    );
}

function NavButtons(props) {
    return (
        <div className='nav-buttons'>
            <button onClick={props.prev}>Previous</button>
            <button onClick={props.next} >Next</button>
        </div>
    );
}


function PokemonCard(props) {

    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        fetch(props.pokemon.url)
        .then(response => response.json())
        .then(data => setImgUrl(data.sprites.front_default));
    }, []);

    return (
        <div className='pokemon-card'>
            <img alt={props.pokemon.name} src={imgUrl} />
            <a href={props.pokemon.url}>
                <div className='pokemon-card-bottom-name'>{props.pokemon.name}</div>                
            </a>
        </div>
    );
}
