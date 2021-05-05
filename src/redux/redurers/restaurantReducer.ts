import {Dispatch} from "redux";


interface Action {
    type: string,
    payload?: any;
}


interface State {
    name: string
}

const initialState = {
    name: 'df'
}

export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case 'Restaurant/GET_CURRENT_RESTAURANT':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}