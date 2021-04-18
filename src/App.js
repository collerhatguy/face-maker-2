import React, {useReducer, useEffect} from "react";

import './styles/App.css';
import Head from "./components/Head";
import Form from "./components/Form";

const ACTIONS = {
  setHair: "set-hair",
  setHead: "set-head",
  setEars: "set-ears",
} 
function reducer(state, action) {
  switch (action.type) {
      case ACTIONS.setHair:
          return {
              ...state,
              hair: {
                  color: action.payload.color
              }
          }
  }
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