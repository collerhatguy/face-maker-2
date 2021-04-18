
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
            <feildset>
                <legend>Head</legend>
                <ColorInput bodyPart="head"  changeColor={(value) => changePart(value, ACTIONS.setHead)}/>
            </feildset>
            <feildset>
                <legend>Eyes</legend>
                <ColorInput bodyPart="eyes"  changeColor={(value) => changePart(value, ACTIONS.setEyes)}/>
            </feildset>
            <feildset>
                <legend>Nose</legend>
                <ColorInput bodyPart="nose"  changeColor={(value) => changePart(value, ACTIONS.setNose)}/>
            </feildset>
            <feildset>
                <legend>Mouth</legend>
                <ColorInput bodyPart="mouth"  changeColor={(value) => changePart(value, ACTIONS.setMouth)}/>
            </feildset>
            <feildset>
                <legend>Ears</legend>
                <ColorInput bodyPart="ears"  changeColor={(value) => changePart(value, ACTIONS.setEars)}/>
            </feildset>
        </form>
    )
}
