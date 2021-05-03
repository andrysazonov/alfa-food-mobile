import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import Restaurant from "../../screens/Restaurant"

const RestaurantStack = createStackNavigator();


const RestaurantNavigation = () : React.ReactElement => (
    <RestaurantStack.Navigator
        initialRouteName="RestaurantMainCard"
    >
        <RestaurantStack.Screen name="RestaurantMainCard" options={{headerShown: false}} component={Restaurant}/>
    </RestaurantStack.Navigator>
)

export default RestaurantNavigation