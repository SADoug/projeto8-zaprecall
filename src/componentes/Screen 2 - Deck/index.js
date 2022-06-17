import React from "react";
import "./style.css"
import LogoPequeno from "./../../assets/img/logo-pequeno.png";
import data from "./../../data"
import Flashcard from "./../Flashcard";
import Icone from "../Icone";

/*FUNÇÃO QUE MOSTRA AS QUESTOES NA TELA*/
function Deck() {
    const [anwsers, setAnwsers] = React.useState([]);
    const [questions, setQuestions] = React.useState([]);

    function makeupFlashcards() {
        if (questions.length === 0) {
            data.sort(comparador);
            setQuestions([...data]);
            return <></>;
        } else {
            return questions.map((question, indice) => {
                const { frente, verso } = question;
                return <Flashcard
                    key={frente + indice}
                    indice={indice + 1}
                    frente={frente}
                    verso={verso}
                    aoFinalizar={anwser => setAnwsers([...anwsers, anwser])}
                />
            })
        }
    }


    function montarFooter() {
        let resultado = <></>;

        if (anwsers.length === questions.length && questions.length > 0) {
            if (!anwsers.includes("erro")) {
                resultado = (
                    <div className="resultado">
                        <span><Icone icone="festinha" /> Parabéns!</span>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                    </div>
                )
            } else {
                resultado = (
                    <div className="resultado">
                        <span><Icone icone="triste" /> Putz!</span>
                        <p>Ainda faltam alguns...Mas não desanime!</p>
                    </div>
                )
            }
        }


        return (
            <>
                {resultado}
                <p>{anwsers.length}/{questions.length} concluídos</p>
                {anwsers.map(resposta => <Icone icone={resposta} />)}
            </>
        )
    }


    const footer = montarFooter();


    const flashcards = makeupFlashcards();

    return (
        <div className="Deck">
            <header>
                <img src={LogoPequeno} alt="ZapRecall" />
                <h1>Zap Recall</h1>
            </header>
            <main>
                {flashcards}
            </main>
            <footer>
                {footer}
            </footer>
        </div>
    )
}

function comparador() {
    return Math.random() - 0.5;
}

export default Deck;