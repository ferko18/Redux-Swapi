import React from "react";
import './comp.css'
const Character = props => {
  return <li>{props.character.name}</li>;
};

export default Character;
