import React, {useReducer, useEffect} from 'react'
import reducer, { ACTIONS } from "../reducer";
import Head from "./Head";
import FaceForm from "./FaceForm";

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
          <FaceForm dispatch={dispatch} ACTIONS={ACTIONS} />
        </div>
    )
}
