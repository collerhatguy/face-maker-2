
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
            <fieldset>
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
            </fieldset>
            <fieldset>
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
            </fieldset>
            <fieldset>
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
            </fieldset>
            <fieldset>
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
            </fieldset>
            <fieldset>
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
            </fieldset>
            <fieldset>
                <legend>Ears</legend>
                <ColorInput 
                    bodyPart="ears"  
                    changeColor={(value) => changePart(value, ACTIONS.setEarsColor)}
                />
                <SizeInput 
                    bodyPart="ears"
                    changeWidth={(value) => changePart(value, ACTIONS.setEarsWidth)} 
                    changeHeight={(value) => changePart(value, ACTIONS.setEarsHeight)}
                /> 
            </fieldset>
        </form>
    )
}
