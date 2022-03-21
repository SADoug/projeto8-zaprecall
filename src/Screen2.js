import React from "react";
import ShowQuestion from "./ShowQuestion";

/*FUNÇÃO QUE MOSTRA AS QUESTOES NA TELA*/
export default function Screen2(){
    const questions = [{pergunta:"O que é JSX?", perguntahide: "pergunta 1", resposta: "Uma extensão de linguagem do JavaScript" }, {resposta: "uma biblioteca JavaScript para construção de interfaces", pergunta:"O React é?", perguntahide: "pergunta 2"},{resposta: "letra maiúscula", pergunta: " Componentes devem iniciar com ...?", perguntahide: "pergunta 3"}, {resposta: "expressões", pergunta:"Podemos ... colocar?", perguntahide: "pergunta 4"}, {resposta: "interagindo com a DOM para colocar componentes React na mesma", pergunta:"O ReactDOM nos ajuda ...?", perguntahide: "pergunta 5"},{resposta: "gerenciar os pacotes necessários e suas dependências", pergunta: "Usamos o npm para?", perguntahide: "pergunta 6"},{resposta: "passar diferentes informações para componentes ", pergunta: "Usamos props para", perguntahide: "pergunta 7"}, {resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", pergunta: "Usamos estado (state) para?", perguntahide: "pergunta 8"}] ;

    return(<>
           <div className="topo">
           <img className="imagems2" src="ZapRecall-Recursos/logo-pequeno.png"/>
           <h1 className="Topos2">ZapRecall</h1>
           </div>
           <div className="buttons">
            {questions.map(element => {return <ShowQuestion key = {element.pergunta} pergunta={element.pergunta} perguntahide={element.perguntahide} resposta ={element.resposta} /> })}
           </div>
           <div className="footer">0/8 CONCLUÍDOS</div>
           </>
    )
}
