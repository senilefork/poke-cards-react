import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from 'axios'
import AddCard from "./addCard";
import pokemonList from "./pokemonList";

const AddPokeCard = (initialState) => {
    //will take inital state of card array which begins as an empty array
    const [state, setState] = useState(initialState);

    const name = pokemonList[localStorage.pokeIdx]
    const addPokemon = async () => {
        const response = await axios.get( `https://pokeapi.co/api/v2/pokemon/${name}/`)

        setState(state => [...state, { ...response.data, id: uuid() }])
    }

    return [state, addPokemon]
}

export default AddPokeCard;

// const AddCard = (initialState) => {
//     const [state, setState] = useState(initialState);
 
//     const add = async () => {
//      const response = await axios.get(
//          "https://deckofcardsapi.com/api/deck/new/draw/")
 
//          setState(state => [...state, { ...response.data, id: uuid() }])
//     }
 
//     return [state, add]
//  }
 
//  export default AddCard