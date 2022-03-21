export default function Screen1(props){
    const {function1} = props;
    function ChangeScreen(){
        function1(false)
    }
    return(<>
           <img className="imagem" src="ZapRecall-Recursos/logo.png"/>
           <h1 className="s1">ZapRecall</h1>
           <button className="buttons1" onClick={ChangeScreen}><h2>Iniciar Recall!</h2></button>
           </>
    )
}


