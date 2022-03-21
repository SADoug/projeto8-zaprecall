import React from "react";
export default function ParteTras(props) {
   /* const [selected2, setSelected2] = React.useState(false); */

    return ( <button  className="buttons4">
        <h2>{props.resposta}</h2>
        <div className="Choose">
            <div onClick={() => Answers("red")} className="red">Não me lembrei</div>
            <div onClick={() => Answers("yellow")} className="yellow">Quase me lembrei</div>
            <div onClick={() => Answers("green")} className="green">Me lembrei!</div>
        </div>
        </button>
)
}


function Answers(props){
    const [selected3, setSelected3] = React.useState(""); 

    
   if (selected3 === "green")(
        <>
        <button  onClick={() => setSelected3(props)}   className="buttons2">
    <h2>{props.perguntahide}</h2>
     <ion-icon className=""   name="play-outline"></ion-icon></button>  
    
    </>
    ); else if(selected3 === "yellow")(
       <>
        <button  onClick={() => setSelected3(props)}   className="buttons2">
    <h2>{props.perguntahide}</h2>
     <ion-icon className=""   name="play-outline"></ion-icon></button>  
    
    </>
    ); else if (selected3 === "red")
  <>
        <button  onClick={() => setSelected3(props)}   className="buttons2">
    <h2>{props.perguntahide}</h2>
     <ion-icon className=""   name="play-outline"></ion-icon></button>  
    
    </>
}