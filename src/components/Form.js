
import React, {useReducer, useEffect} from 'react'
const ACTIONS = {
    setHair: "set-hair",
    setHead: "set-head",
    setEars: "set-ears",
    setHair: "set-hair",
    setHair: "set-hair",
    setHair: "set-hair",
} 
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.setHair:
            return {
                ...state,
                hair: {
                    color: action.payload.color
                }
            }
    }

}
export default function Form() {
    const [state, dispatch] = useReducer(reducer, {});
    const changeHair = (value) => {
        dispatch({
            type: ACTIONS.setHair, 
            payload: {
                color: value
            }
        })
    }
    useEffect(() => {
        console.log(state);
    }, [state]);
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
