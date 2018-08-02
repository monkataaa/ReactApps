import React, { Component } from 'react';
import { STATUS_CODES } from 'http';

class PokemonForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonName: '',
            pokemonImg: '',
            pokemonInfo: ''
        };
        this.onSubmitedForm = this.onSubmitedForm.bind(this)
        this.onChangedValue = this.onChangedValue.bind(this)
    }
    onChangedValue(evn) {
        let stateKey = evn.target.name
        let value = evn.target.value
        this.setState(prevState => {
            prevState[stateKey] = value
            return prevState
        })
    }

    onSubmitedForm(evn) {
        evn.preventDefault()
        let newObj = {
            pokemonName: this.state.pokemonName,
            pokemonImg: this.state.pokemonImg,
            pokemonInfo: this.state.pokemonInfo
        }
        fetch('http://localhost:5000/pokedex/create', {
            method: 'POST',
            body: JSON.stringify(newObj),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(newPoke => {
                this.props.addPoke(newPoke)
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <form className='form'>
                    Pokemon Name:
                    <input value={this.state.pokemonName} onChange={this.onChangedValue} name='pokemonName' type='text'/>
                    Pokemon Image:
                    <input onChange={this.onChangedValue} name='pokemonImg' type="text" />
                    Pokemon Info:
                    <input onChange={this.onChangedValue} name='pokemonImg' name='pokemonInfo' type="text" />
                    <button onClick={this.onSubmitedForm}>Create Pokemon</button>
                </form>
            </div>
        );
    }
}

export default PokemonForm;