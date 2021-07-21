import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from 'axios'

const AddCard = (initialState) => {
   const [state, setState] = useState(initialState);

   const add = async () => {
    const response = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/draw/")

        setState(state => [...state, { ...response.data, id: uuid() }])
   }

   return [state, add]
}

export default AddCard

