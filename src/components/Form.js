
import React from 'react'
import ColorInput from './ColorInput'

export default function Form({dispatch, ACTIONS}) {
    const changePart = (value, action) => {
        dispatch({
            type: action, 
            payload: {
                color: value
            }
        })
    }
    return (
        <form>
            <feildset>
                <legend>Hair</legend>
                <ColorInput bodyPart="hair" changeColor={(value) => changePart(value, ACTIONS.setHair)} />
            </feildset>
            {/* <feildset>
                <legend>Head</legend>
                <ColorInput bodyPart="head"  />
            </feildset>
            <feildset>
                <legend>Hair</legend>
                <ColorInput bodyPart="hair"  />
            </feildset> */}
        </form>
    )
}
