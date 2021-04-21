
export const ACTIONS = {
    hair: {
        color: "set-hair-color",
        width: "set-hair-width",
        height: "set-hair-height",
    },
    head: {
        color: "set-head-color",
        width: "set-head-width",
        height: "set-head-height",
    },
    eyes: {
        color: "set-eye-color",
        width: "set-eye-width",
        height: "set-eye-height",
    },
    nose: {
        color: "set-nose-color",
        width: "set-nose-width",
        height: "set-nose-height",
    },
    mouth: {
        color: "set-mouth-color",
        width: "set-mouth-width",
        height: "set-mouth-height",
    },
    mouth: {
        color: "set-mouth-color",
        width: "set-mouth-width",
        height: "set-mouth-height",
    },
    ears: {
        color: "set-ears-color",
        width: "set-ears-width",
        height: "set-ears-height",
    },
} 
export default function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.hair.color:
            return {
                ...state,
                hair: {
                    ...state.hair,
                    backgroundColor: action.payload.value
                }
            }
        case ACTIONS.hair.width:
            return {
                ...state,
                hair: {
                    ...state.hair,
                    width: `${action.payload.value}px`,
                }
            }
        case ACTIONS.hair.height:
            return {
                ...state,
                hair: {
                    ...state.hair,
                    height: `${action.payload.value}px`,
                }
            }
        case ACTIONS.head.color:
            return {
                ...state,
                head: {
                    ...state.head,
                    backgroundColor: action.payload.value
                }
            }
        case ACTIONS.head.height:
            return {
                ...state,
                head: {
                    ...state.head,
                    height: `${action.payload.value}px`,
                }
            }
        case ACTIONS.head.width:
            return {
                ...state,
                head: {
                    ...state.head,
                    width: `${action.payload.value}px`,
                    widthNum: action.payload.value,
                }
            }
        case ACTIONS.eyes.color:
            return {
                ...state,
                eyes: {
                    ...state.eyes,
                    iris: {
                        backgroundColor: action.payload.value,
                    }
                }
            }
        case ACTIONS.eyes.width:
            return {
                ...state,
                eyes: {
                    ...state.eyes,
                    width: `${action.payload.value}px`,
                }
            }
        case ACTIONS.eyes.height:
            return {
                ...state,
                eyes: {
                    ...state.eyes,
                    height: `${action.payload.value}px`,
                }
            }
        case ACTIONS.nose.color:
            return {
                ...state,
                nose: {
                    ...state.nose,
                    borderColor: action.payload.value,
                }
            }
        case ACTIONS.nose.width:
            return {
                ...state,
                nose: {
                    ...state.nose,
                    width: `${action.payload.value}px`,
                }
            }
        case ACTIONS.nose.height:
            return {
                ...state,
                nose: {
                    ...state.nose,
                    height: `${action.payload.value}px`,
                }
            }
        case ACTIONS.mouth.color:
            return {
                ...state,
                mouth: {
                    ...state.mouth,
                    backgroundColor: action.payload.value,
                }
            }
        case ACTIONS.mouth.width:
            return {
                ...state,
                mouth: {
                    ...state.mouth,
                    width: `${action.payload.value}px`,
                }
            }
        case ACTIONS.mouth.height:
            return {
                ...state,
                mouth: {
                    ...state.mouth,
                    height: `${action.payload.value}px`,
                }
            }
        case ACTIONS.ears.color:
            return {
                ...state,
                ears: {
                    ...state.ears,
                    backgroundColor: action.payload.value,
                }
            }
        case ACTIONS.ears.width:
            return {
                ...state,
                ears: {
                    ...state.ears,
                    width: `${action.payload.value}px`,
                    widthApart: `${action.payload.value + state.head.widthNum}px`
                }
            }
        case ACTIONS.ears.height:
            return {
                ...state,
                ears: {
                    ...state.ears,
                    height: `${action.payload.value}px`,
                }
            }
        default: return state;
    }
}