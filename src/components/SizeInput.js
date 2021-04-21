import React from 'react'

export default function SizeInput({bodyPart, dispatch, ACTIONS}) {
    const changeWidth = (value) => {
        dispatch({
            type: ACTIONS[bodyPart]["width"], 
            payload: {
                value: value
            }
        })
    }
    const changeHeight = (value) => {
        dispatch({
            type: ACTIONS[bodyPart]["height"], 
            payload: {
                value: value
            }
        })
    }
    return (
        <div>
            <div>
                <label for={`${bodyPart}width`}>Width:
                    <input 
                        type="number"
                        id={`${bodyPart}width`}
                        name={`${bodyPart}width`}
                        onChange={e => {changeWidth(e.target.value)}}
                    />
                    px
                </label>
            </div>
            <div>
                <label for={`${bodyPart}height`}>Height:
                    <input 
                        type="number"
                        id={`${bodyPart}height`}
                        name={`${bodyPart}height`}
                        onChange={e => {changeHeight(e.target.value)}}
                    />
                    px
                </label>
            </div>
        </div>
    )
}
