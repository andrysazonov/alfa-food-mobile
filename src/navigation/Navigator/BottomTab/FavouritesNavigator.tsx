import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import FavouritesScreen from "../../../screens/Favourites";


const Stack = createStackNavigator();


const FavouritesNavigator = (): React.ReactElement => (
    <Stack.Navigator>
        <Stack.Screen name="favourites" options={{title: "Избранное", headerLeft: null}} component={FavouritesScreen} />
    </Stack.Navigator>
)

export default  FavouritesNavigator