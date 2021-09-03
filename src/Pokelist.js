import { props } from "bluebird";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './App.css';

export default function Pokelist() {
    const [searchString, setSearchString] = useState('');
    return (
        <>
            <Search searchString={searchString} setSearchString={setSearchString}></Search>
            <PokemonCards searchString={searchString}></PokemonCards>
        </>
    );
}

function Search(props) {
    
    return (
        <input value={props.searchString} onChange={e => props.setSearchString(e.target.value)}></input>
    );
}

function PokemonCards(props) {

    console.log(props);
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
                pokemonList
                .filter(
                    pokemon => pokemon.name.includes(props.searchString))
                .map(pokemon => <PokemonCard key={pokemon.url} pokemon={pokemon}></PokemonCard>)
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
    const id = props.pokemon.url.substring(34, props.pokemon.url.length - 1);

    useEffect(() => {
        fetch(props.pokemon.url)
        .then(response => response.json())
        .then(data => setImgUrl(data.sprites.other.dream_world.front_default));
    }, []);

    return (
        <div className='pokemon-card'>
            <img alt={props.pokemon.name} src={imgUrl} />
            <Link to={`/p/${id}`}>
                <div className='pokemon-card-bottom-name'>{props.pokemon.name}</div>                
            </Link>
        </div>
    );
}
