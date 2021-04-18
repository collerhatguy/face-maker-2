
import React from 'react'
import ColorInput from './ColorInput'

export default function Form({dispatch, ACTIONS}) {
    const changeHair = (value) => {
        dispatch({
            type: ACTIONS.setHair, 
            payload: {
                color: value
            }
        })
    }
    return (
        <form>
            <feildset>
                <legend>Hair</legend>
                    <ColorInput bodyPart="hair" changeColor={changeHair} />
            </feildset>
        </form>
    )
}
