import { Dispatch } from "redux";
import { profileAPI } from "../../api/profile-api";


interface Action {
    type: string,
    payload?: any;
}


interface State {
    settings: {
        enableNotifications: boolean
    }
    bookingsHistory: any[] | []
}

const initialState = {
    settings: {
        enableNotifications: false
    },
    bookingsHistory: []
}




export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case 'Profile/SET_BOOKINGS_HISTORY':
            return {
                ...state,
                bookingsHistory: action.payload
            }
        default:
            return state
    }
}


export const actions = {
    setBookingsHistory: (bookings: any[]) => ({type: 'Profile/SET_BOOKINGS_HISTORY', payload: bookings} as const),
}

export const getBookingsHistory = (personToken: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getBookingsHistory(personToken)
    dispatch(actions.setBookingsHistory(data))
}