import ParteFrente from "./Partefrente";
import ParteTras from "./ParteTras";
import React from "react";

export default function ShowQuestion(props) {
    const [selected, setSelected] = React.useState(false); // boolean
    const [selected2, setSelected2] = React.useState(false); 

    
    return !selected ? ( <>
        <button className="buttons2">
    <h2>{props.perguntahide}</h2>
     <ion-icon className=""  onClick={() => setSelected(true)} name="play-outline"></ion-icon></button>  
    
    </>
    ) : ( !selected2 ? (
        <ParteFrente setSelected2 = {setSelected2} pergunta = {props.pergunta}/>
    ) : (<ParteTras resposta = {props.resposta}/>)
    )
  }