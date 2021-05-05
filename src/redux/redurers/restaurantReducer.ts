import {Dispatch} from "redux";
import { restaurantAPI } from "../../api/restaurant-api";


interface Action {
    type: string,
    payload?: any;
}


interface State {
    name?: string
    restaurant: any
}

const initialState = {
    restaurant:
        {
            id: 'myid',
            title: "Lite dragon",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, reiciendis.',
            address: 'Тамбов, ул Ленина д 5',
            workingTime: [
                {
                    days: 'Пн - Пт',
                    value: '09.00 - 18.00'
                },
                {
                    days: 'Сб - Вс',
                    value: '10.00 - 20.00'
                }
            ]
        },
}

export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case 'Restaurant/SET_CURRENT_RESTAURANT':
            return {
                ...state,
                restaurant: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    setCurrentRestaurant: (restaurant: any) => ({
        type: 'Restaurant/SET_CURRENT_RESTAURANT',
        payload: restaurant
    })
}


export const getCurrentRestaurant = (id: string) => async (dispatch: Dispatch) => {
    try {
        const data = await restaurantAPI.getCurrentRestaurant(id)
        console.log('get current restaurant is: ', data)
        dispatch(actions.setCurrentRestaurant(data))

    } catch(error) {
        console.log('Some went wrong with error: ', error)
    }

}