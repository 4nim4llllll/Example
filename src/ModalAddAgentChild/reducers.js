import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.CHANGE_NAME:
            return {
                ...state,
                name: action.value
            }
        case type.TOOGLE_OPEN: 
            return { 
                ...defaultState(),
                open: !state.open
            }
        case type.CHANGE_LOADING: 
            return { 
                ...state,
                loading: action.value
            }
        case type.CHANGE_PROVINSI_ID:
            return { 
                ...state,
                provinsi_id: action.value,
            }
        case type.CHANGE_PROVINSI_NAME:
            return { 
                ...state,
                provinsi_name: action.value,
            }
        case type.CHANGE_SECTOR_ID:
            return { 
                ...state,
                sector_id: action.value,
            }
        case type.CHANGE_SECTOR_NAME:
            return { 
                ...state,
                sector_name: action.value,
            }
        case type.CHANGE_AGENT_ID:
            return { 
                ...state,
                agent_id: action.value,
            }
        case type.CHANGE_AGENT_NAME:
            return { 
                ...state,
                agent_name: action.value,
            }
        case type.RESET: 
            return { 
                ...defaultState()
            }
        default:
            return state
    }
}

const defaultState = () => ({
    name: "",
    open: false,
    loading: false,
    provinsi_id: 0,
    provinsi_name: "",
    sector_id: 0,
    sector_name: "",
    agent_id: 0,
    agent_name: "",
})

export default main