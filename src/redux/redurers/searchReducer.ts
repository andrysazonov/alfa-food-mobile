import { Dispatch } from "redux";
import { searchAPI } from "../../api/search-api";


type RestaurantSearchCardType = {
    image: string,
    title: string,
    description: string,
    rating: string
}


interface Action {
    type: string,
    payload?: any;
}


interface State {
    search: string,
    restaurantList: RestaurantSearchCardType[]
}

const initialState = {
    search: '',
    restaurantList: [] as RestaurantSearchCardType[] | []
}




export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case 'Search/CHANGE_SEARCH_STRING':
            return {
                ...state,
                search: action.payload
            }
        default:
            return state
    }
}


export const actions = {
    setSearchString: (search: string) => ({type: 'Search/CHANGE_SEARCH_STRING', payload: search} as const),
    setRestaurantList: (restaurantList: RestaurantSearchCardType[] | []) => ({type: 'Search/SET_RESTAURANT_LIST', payload: restaurantList} as const)
}

export const getRestaurantList = (searchString: string) => async (dispatch: Dispatch) => {
    const data = await searchAPI.getRestaurantList(searchString)
    dispatch(actions.setRestaurantList(data))
}