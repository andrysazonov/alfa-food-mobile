interface Action {
    type: string,
    payload?: any;
}

type RestaurantCard = {
    id: string,
    title: string,
    description: string,
    image: string,
    rating: string
}


interface State {
    favourites: RestaurantCard[] | []
}

const initialState = {
    favourites: []
}

export const actions = {
    addRestaurant: (restaurant: RestaurantCard) => ({
        type: "Favourites/ADD_RESTAURANT",
        payload: restaurant
    } as const),
    deleteRestaurant: (restaurantId: string) => ({
        type: "Favourites/DELETE_RESTAURANT",
        payload: restaurantId
    })
}



export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case "Favourites/ADD_RESTAURANT":
            console.log('add rest - action payload : ', action.payload)
            return {
                ...state,
                favourites: state.favourites.concat(action.payload)
            }
        case 'Favourites/DELETE_RESTAURANT':
            console.log('delete rest - action payload : ', action.payload)
            let new_arr = state.favourites.filter(rest => rest.id !== action.payload)
            return {
                ...state,
                favourites: new_arr
            }
        default:
            return state
    }
}

