import ReactDOM from "react-dom";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import React from "react";

function App() {
    const [ShowHome, setShowHome] = React.useState(true)
    return (
        <>
        {(ShowHome) ? <Screen1 function1 ={setShowHome}/> : <Screen2 /> }
   </>
    )
    
}

ReactDOM.render(<App />, document.querySelector(".root"));