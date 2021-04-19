import React, {useReducer, useEffect} from "react";

import './styles/App.css';
import Head from "./components/Head";
import Form from "./components/Form";
import reducer, { ACTIONS } from "./reducer";


function App() {
  const intialState = {
    hair: {},
    head: {},
    brows: {},
    eyes: {},
    ears: {},
    nose: {},
    mouth: {},
  }
  const [face, dispatch] = useReducer(reducer, intialState);
  
  useEffect(() => {
      console.log(face);
  }, [face]);
  return (
    <div className="App">
      <Head face={face} />
      <Form dispatch={dispatch} ACTIONS={ACTIONS} />
    </div>
  );
}

export default App;