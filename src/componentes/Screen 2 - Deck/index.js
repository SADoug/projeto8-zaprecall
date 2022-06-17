import React from "react";
import "./style.css"
import LogoPequeno from "./../../assets/img/logo-pequeno.png";
import data from "./../../data"
import Flashcard from "./../Flashcard";

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
                <p>0/1 Concluídos!</p>
            </footer>
        </div>
    )
}

function comparador() {
    return Math.random() - 0.5;
}

export default Deck;