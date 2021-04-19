import React, {useReducer, useEffect} from "react";

import './styles/App.css';
import Head from "./components/Head";
import Form from "./components/Form";

const ACTIONS = {
  setHairColor: "set-hair-color",
  setHairWidth: "set-hair-width",
  setHairHeight: "set-hair-height",
  setHeadColor: "set-head-color",
  setHeadWidth: "set-head-width",
  setHeadHeight: "set-head-height",
  setHead: "set-head",
  setEars: "set-eyes",
  setNose: "set-nose",
  setMouth: "set-mouth",
  setEars: "set-ears",
} 
function reducer(state, action) {
  switch (action.type) {
      case ACTIONS.setHairColor:
          return {
              ...state,
              hair: {
                  ...state.hair,
                  backgroundColor: action.payload.value
              }
          }
      case ACTIONS.setHairWidth:
          return {
              ...state,
              hair: {
                ...state.hair,
                width: action.payload.value
              }
          }
      case ACTIONS.setHairHeight:
          return {
              ...state,
              hair: {
                ...state.hair,
                height: action.payload.value
              }
          }
      case ACTIONS.setHeadColor:
          return {
              ...state,
              head: {
                  ...state.head,
                  backgroundColor: action.payload.value
              }
          }
      case ACTIONS.setHeadHeight:
          return {
              ...state,
              head: {
                  ...state.head,
                  height: action.payload.value
              }
          }
      case ACTIONS.setHeadWidth:
          return {
              ...state,
              head: {
                  ...state.head,
                  width: action.payload.value
              }
          }
      case ACTIONS.setEyes:
          return {
              ...state,
              eyes: {
                  backgroundColor: action.payload.value
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