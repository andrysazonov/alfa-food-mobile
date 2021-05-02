import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../../screens/Home";




const Stack = createStackNavigator();


const HomeNavigator = (): React.ReactElement => (
    <Stack.Navigator
        // screenOptions={{
        //     headerLeft: null,
        //     gesturesEnabled: false,
        // }}
    >
        <Stack.Screen
            name="home"
            options={{title: "Лента", headerLeft: null}}
            component={HomeScreen}
        />
    </Stack.Navigator>
)

export default  HomeNavigator