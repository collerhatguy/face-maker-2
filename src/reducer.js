
const ACTIONS = {
    setHairColor: "set-hair-color",
    setHairWidth: "set-hair-width",
    setHairHeight: "set-hair-height",
    setHeadColor: "set-head-color",
    setHeadWidth: "set-head-width",
    setHeadHeight: "set-head-height",
    setEyeColor: "set-eye-color",
    setEyeWidth: "set-eye-width",
    setEyeHeight: "set-eye-height",
    setNoseColor: "set-nose-color",
    setNoseWidth: "set-nose-width",
    setNoseHeight: "set-nose-height",
    setMouthColor: "set-mouth-color",
    setMouthWidth: "set-mouth-width",
    setMouthHeight: "set-mouth-height",
    setEars: "set-eyes",
    setMouth: "set-mouth",
    setEars: "set-ears",
} 
export default function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.setHairColor:
            return {
                ...state,
                hair: {
                    ...state.hair,
                    backgroundColor: action.payload.value
                }
            }
        case ACTIONS.setHairWidth:
            return {
                ...state,
                hair: {
                    ...state.hair,
                    width: action.payload.value
                }
            }
        case ACTIONS.setHairHeight:
            return {
                ...state,
                hair: {
                    ...state.hair,
                    height: action.payload.value
                }
            }
        case ACTIONS.setHeadColor:
            return {
                ...state,
                head: {
                    ...state.head,
                    backgroundColor: action.payload.value
                }
            }
        case ACTIONS.setHeadHeight:
            return {
                ...state,
                head: {
                    ...state.head,
                    height: action.payload.value
                }
            }
        case ACTIONS.setHeadWidth:
            return {
                ...state,
                head: {
                    ...state.head,
                    width: action.payload.value
                }
            }
        case ACTIONS.setEyeColor:
            return {
                ...state,
                eyes: {
                    ...state.eyes,
                    iris: {
                        backgroundColor: action.payload.value,
                    }
                }
            }
        case ACTIONS.setEyeWidth:
            return {
                ...state,
                eyes: {
                    ...state.eyes,
                    width: action.payload.value,
                }
            }
        case ACTIONS.setEyeHeight:
            return {
                ...state,
                eyes: {
                    ...state.eyes,
                    height: action.payload.value,
                }
            }
        case ACTIONS.setNoseColor:
            return {
                ...state,
                nose: {
                    ...state.nose,
                    borderColor: action.payload.value,
                }
            }
        case ACTIONS.setNoseWidth:
            return {
                ...state,
                nose: {
                    ...state.nose,
                    width: action.payload.value,
                }
            }
        case ACTIONS.setNoseHeight:
            return {
                ...state,
                nose: {
                    ...state.nose,
                    height: action.payload.value,
                }
            }
        case ACTIONS.setMouthColor:
            return {
                ...state,
                mouth: {
                    ...state.mouth,
                    backgroundColor: action.payload.value,
                }
            }
        case ACTIONS.setMouthWidth:
            return {
                ...state,
                mouth: {
                    ...state.mouth,
                    width: action.payload.value,
                }
            }
        case ACTIONS.setMouthHeight:
            return {
                ...state,
                mouth: {
                    ...state.mouth,
                    height: action.payload.value,
                }
            }
        default: return state;
    }
}