import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

// import SplashScreen from "../../screens/Splash";

import BottomTabNavigator from "./BottomTabNavigator"
import AuthNavigation from "./AuthNavigator";


const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
    gesturesEnabled: false,
}

const RootNavigator = (): React.ReactElement => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Auth" options={screenOptions} component={AuthNavigation} />
            <Stack.Screen name="BottomTab" options={screenOptions} component={BottomTabNavigator} />
            {/*<Stack.Screen name="Splash" options={screenOptions} component={SplashScreen} />*/}
        </Stack.Navigator>
    )
}

export default RootNavigator
