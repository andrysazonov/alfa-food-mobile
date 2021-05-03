import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "../../../screens/Search";


const Stack = createStackNavigator();


const SearchNavigator = (): React.ReactElement => (
    <Stack.Navigator
        initialRouteName={"mainSearch"}
    >
        <Stack.Screen name="mainSearch" options={{title: "Поиск", headerLeft: null}} component={SearchScreen} />
    </Stack.Navigator>
)

export default  SearchNavigator