import React from 'react';

const PokemonList = ({allPokemons}) => {
    return (
        <div>
            {allPokemons.map((poke, index) => {
                return (
                <span>
                    {poke.pokemonName}
                    <img key={index} src={poke.pokemonImg} />
                </span>
                )
            })}
        </div>
    );
}

export default PokemonList;