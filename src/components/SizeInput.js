import React from 'react'

export default function SizeInput({bodyPart, changeLength, changeWidth}) {
    return (
        <div>
            <label for={`${bodyPart}width`}>Width:
                <input 
                    type="width"
                    id={`${bodyPart}width`}
                    name={`${bodyPart}width`}
                    onChange={e => {changeWidth(e.target.value)}}
                />
                px
            </label>
            <label for={`${bodyPart}length`}>Length:
                <input 
                    type="length"
                    id={`${bodyPart}length`}
                    name={`${bodyPart}length`}
                    onChange={e => {changeLength(e.target.value)}}
                />
                px
            </label>
        </div>
    )
}
