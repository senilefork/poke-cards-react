import React, { useState } from "react";

const FlipCard = (initialState) => {
   const [state, setState] = useState(initialState);

   const flip = () => {
       setState(state => !state)
   }
   return[state, flip]
};

export default FlipCard;