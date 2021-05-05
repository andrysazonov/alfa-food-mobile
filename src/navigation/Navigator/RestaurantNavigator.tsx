import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import Restaurant from "../../screens/Restaurant"
import BookingTable from "../../screens/BookingTable";



const RestaurantStack = createStackNavigator();


const RestaurantNavigation = () : React.ReactElement => (
    <RestaurantStack.Navigator
        initialRouteName="RestaurantMainCard"
    >
        <RestaurantStack.Screen name="RestaurantMainCard" options={{headerShown: false}} component={Restaurant} />
        <RestaurantStack.Screen name="RestaurantBookingTable" options={{ title: 'Бронь стола'}} component={BookingTable} />
    </RestaurantStack.Navigator>
)

export default RestaurantNavigation