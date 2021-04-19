
import React from 'react'
import ColorInput from './ColorInput'
import SizeInput from "./SizeInput";

export default function Form({dispatch, ACTIONS}) {
    const changePart = (value, action) => {
        dispatch({
            type: action, 
            payload: {
                value: value
            }
        })
    }
    return (
        <form>
            <feildset>
                <legend>Hair</legend>
                <ColorInput 
                    bodyPart="hair" 
                    changeColor={(value) => changePart(value, ACTIONS.setHairColor)} 
                />
                <SizeInput 
                    bodyPart="hair"
                    changeWidth={(value) => changePart(value, ACTIONS.setHairWidth)} 
                    changeHeight={(value) => changePart(value, ACTIONS.setHairHeight)}
                /> 
            </feildset>
            <feildset>
                <legend>Head</legend>
                <ColorInput 
                    bodyPart="head"  
                    changeColor={(value) => changePart(value, ACTIONS.setHeadColor)}
                />
                <SizeInput 
                    bodyPart="head"
                    changeWidth={(value) => changePart(value, ACTIONS.setHeadWidth)} 
                    changeHeight={(value) => changePart(value, ACTIONS.setHeadHeight)}
                /> 
            </feildset>
            <feildset>
                <legend>Eyes</legend>
                <ColorInput 
                    bodyPart="eyes"  
                    changeColor={(value) => changePart(value, ACTIONS.setEyeColor)}
                />
                <SizeInput 
                    bodyPart="eyes"
                    changeWidth={(value) => changePart(value, ACTIONS.setEyeWidth)} 
                    changeHeight={(value) => changePart(value, ACTIONS.setEyeHeight)}
                /> 
            </feildset>
            <feildset>
                <legend>Nose</legend>
                <ColorInput 
                    bodyPart="nose"  
                    changeColor={(value) => changePart(value, ACTIONS.setNoseColor)}
                />
                <SizeInput 
                    bodyPart="nose"
                    changeWidth={(value) => changePart(value, ACTIONS.setNoseWidth)} 
                    changeHeight={(value) => changePart(value, ACTIONS.setNoseHeight)}
                /> 
            </feildset>
            <feildset>
                <legend>Mouth</legend>
                <ColorInput 
                    bodyPart="mouth"  
                    changeColor={(value) => changePart(value, ACTIONS.setMouthColor)}
                />
                <SizeInput 
                    bodyPart="mouth"
                    changeWidth={(value) => changePart(value, ACTIONS.setMouthWidth)} 
                    changeHeight={(value) => changePart(value, ACTIONS.setMouthHeight)}
                /> 
            </feildset>
            <feildset>
                <legend>Ears</legend>
            </feildset>
        </form>
    )
}
