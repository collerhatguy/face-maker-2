import React from 'react'

export default function SizeInput({bodyPart, changeHeight, changeWidth}) {
    return (
        <div>
            <div>
                <label for={`${bodyPart}width`}>Width:
                    <input 
                        type="width"
                        id={`${bodyPart}width`}
                        name={`${bodyPart}width`}
                        onChange={e => {changeWidth(`${e.target.value}px`)}}
                    />
                    px
                </label>
            </div>
            <div>
                <label for={`${bodyPart}height`}>Height:
                    <input 
                        type="height"
                        id={`${bodyPart}height`}
                        name={`${bodyPart}height`}
                        onChange={e => {changeHeight(`${e.target.value}px`)}}
                    />
                    px
                </label>
            </div>
        </div>
    )
}
