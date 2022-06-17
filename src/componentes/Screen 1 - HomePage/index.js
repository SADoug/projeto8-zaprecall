import React from "react";
import Logo from "./../../assets/img/logo.png";
import "./style.css";


export default function Screen1() {
    const [ShowHome, setShowHome] = React.useState(true)
    if (ShowHome) {
        return (
            <div className="Screen1">
                <img src={Logo} alt="Zap Recall!" />
                <h1>ZapRecall</h1>
                <button onClick={() => setShowHome(false)}><h2>Iniciar Recall!</h2></button>
            </div>
        )
    } return <></>
}

