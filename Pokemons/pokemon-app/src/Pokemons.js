import React, { Component } from 'react';
import PokemonForm from './PokemonForm';
import PokemonList from './PokemonList';

class Pokemons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allPoke : []
        }
        this.addNewPoke = this.addNewPoke.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(data => {return data.json()})
            .then(parsedData => {
                this.setState({allPoke : parsedData['pokemonColection']})
            })
    }

    addNewPoke(newPoke){
        this.setState(prevState => {
            prevState.allPoke.push(newPoke)
            return prevState
        })
    }
    
    render() {
        return (
            <div>
                <PokemonForm addPoke = {this.addNewPoke}/>
                <PokemonList allPokemons = {this.state.allPoke}/>
            </div>
        );
    }
}

export default Pokemons;