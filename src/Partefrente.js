export default function ParteFrente(props) {
    return ( <button  className="buttons3">
        <h2>{props.pergunta}</h2>
        <img className="image" onClick={() => props.setSelected2(true)} name="play-outline" src="ZapRecall-Recursos/setinha.png" />
       
        </button>
)
}