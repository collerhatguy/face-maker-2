
import React from 'react'

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
                <label for="hair-color">Color: </label>
                <input 
                    type="color"
                    id="hair-color"
                    name="hair-color"
                    onChange={e => {changeHair(e.target.value)}}
                />
            </feildset>
        </form>
    )
}
