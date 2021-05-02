import {authAPI} from "../../api/auth-api";
import { Dispatch } from "redux";

interface Action {
    type: string,
    payload?: any;
}

interface State {
    data: any[]
    loading: boolean
}

const initialState = {
    data: [],
    loading: false,
    error: ""
}

export const actions = {
    setAuthUserData: (loggedInUser: {} | null) => ({
        type: "Auth/SET_USER_DATA",
        payload: { loggedInUser }
    } as const)
}

export const login = (username: string, password: string) => async (dispatch: Dispatch) => {
    try {
        console.log('username : ', username)
        // let loggedInUser = await authAPI.login(username,password)
        // if (loggedInUser) {
        //     dispatch(actions.setAuthUserData(loggedInUser))
        // }
    } catch {
        console.log(`bad login request with ${username} and ${password}`)
    }
}


export const register = ( email: string, password: string, phone: string, username: string) => async (dispatch: Dispatch) => {
    try {
        let loggedInUser = await authAPI.register(email,password, phone, username)
        if (loggedInUser) {
            dispatch(actions.setAuthUserData(loggedInUser))
        }
    } catch {
        console.log('some error')
    }
}


export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case 'Auth/SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

