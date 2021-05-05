import {authAPI} from "../../api/auth-api";
import { Dispatch } from "redux";

interface Action {
    type: string,
    payload?: any;
}

interface State {
    data: any[]
    loading: boolean,
    error: string,
    loggedInUser: {
        username: string,
        phone: string,
        city: string
    }
}

const initialState = {
    loggedInUser: {
        username: 'k1selevde',
        phone: '89121212121',
        city: 'Tambiv'
    },
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
        let loggedInUser = await authAPI.login(username,password)
        console.log('loggedInUser: ', loggedInUser)
        // if (loggedInUser) {
        //     dispatch(actions.setAuthUserData(loggedInUser))
        // }
    } catch(error) {
        console.log(`bad login request with error: ${error} `)
    }
}


export const register = ( email: string, password: string, phone: string, username: string) => async (dispatch: Dispatch) => {
    // try {
    //     let data = await authAPI.register(email,password, phone, username)
    //     console.log('my logged user: ', data)
    //     if (data) {
    //         dispatch(actions.setAuthUserData(data))
    //     }
    // } catch (e) {
    //     console.log('data is ', e)
    // }
    authAPI.register(email,password, phone, username)
        .then((res) => {
            console.log('res is ', res)
            // dispatch(actions.setAuthUserData(data))
        })
        .catch(error => {
            console.log(error)
        })
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

