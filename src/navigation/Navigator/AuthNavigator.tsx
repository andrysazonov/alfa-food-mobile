import React from "react"
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../../screens/SignIn"
import SignUp from "../../screens/SignUp"
import Verification from "../../screens/Verification";
import ChooseCity from "../../screens/ChooseCity";

const LoginStack = createStackNavigator();


const AuthNavigation = () : React.ReactElement => (
    <LoginStack.Navigator
        initialRouteName="SignIn"
    >
        <LoginStack.Screen name="SignIn" options={SignIn.navigationOptions} component={SignIn}/>
        <LoginStack.Screen name="SignUp" options={SignUp.navigationOptions} component={SignUp} />
        <LoginStack.Screen name="PhoneVerification" component={Verification} />
        <LoginStack.Screen name="ChooseCity" component={ChooseCity} />
    </LoginStack.Navigator>
)

export default AuthNavigation