import React from 'react'

export default function ColorInput({bodyPart, changeColor}) {
    return (
        <div>
            <label for={`${bodyPart}color`}>Color: </label>
            <input 
                type="color"
                id={`${bodyPart}color`}
                name={`${bodyPart}color`}
                onChange={e => {changeColor(e.target.value)}}
            />
        </div>
    )
}
