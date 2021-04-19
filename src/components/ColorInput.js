import React from 'react'

export default function ColorInput({bodyPart, dispatch, ACTIONS}) {
    const changePart = (value) => {
        dispatch({
            type: ACTIONS[bodyPart]["color"], 
            payload: {
                value: value
            }
        })
    }
    return (
        <div>
            <label for={`${bodyPart}color`}>Color: </label>
            <input 
                type="color"
                id={`${bodyPart}color`}
                name={`${bodyPart}color`}
                onChange={e => {changePart(e.target.value)}}
            />
        </div>
    )
}
