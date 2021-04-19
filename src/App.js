import React, {useReducer, useEffect} from "react";

import './styles/App.css';
import Head from "./components/Head";
import Form from "./components/Form";
import reducer from "./reducer";

const ACTIONS = {
    setHairColor: "set-hair-color",
    setHairWidth: "set-hair-width",
    setHairHeight: "set-hair-height",
    setHeadColor: "set-head-color",
    setHeadWidth: "set-head-width",
    setHeadHeight: "set-head-height",
    setEyeColor: "set-eye-color",
    setEyeWidth: "set-eye-width",
    setEyeHeight: "set-eye-height",
    setNoseColor: "set-nose-color",
    setNoseWidth: "set-nose-width",
    setNoseHeight: "set-nose-height",
    setMouthColor: "set-mouth-color",
    setMouthWidth: "set-mouth-width",
    setMouthHeight: "set-mouth-height",
    setEars: "set-eyes",
    setMouth: "set-mouth",
    setEars: "set-ears",
  } 

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