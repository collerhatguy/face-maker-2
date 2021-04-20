import React, {useReducer, useEffect} from 'react'
import reducer, { ACTIONS } from "../reducer";
import Head from "./Head";
import Form from "./Form";

export default function AppPage() {
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
        <div>
          <Head face={face} />
          <Form dispatch={dispatch} ACTIONS={ACTIONS} />
        </div>
    )
}
