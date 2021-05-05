import React from "react"
import { createStackNavigator } from "@react-navigation/stack";


import Profile from "../../../screens/Profile"
import BookingHistory from "../../../screens/BookingHistory"
import MyBookings from "../../../screens/MyBookings"
import PersonalData from "../../../screens/PersonalData"
import Help from "../../../screens/Help"
import Settings from "../../../screens/Settings"



const Stack = createStackNavigator()

const ProfileNavigator = (): React.ReactElement => (
    <Stack.Navigator
        initialRouteName={'profile'}
    >
        <Stack.Screen  options={{ title: 'Профиль', headerLeft: null }} name="profile" component={Profile} />
        <Stack.Screen  options={{ title: 'Личные данные' }} name="personalData" component={PersonalData} />
        <Stack.Screen  options={{ title: 'История бронирований' }} name="bookingHistory" component={BookingHistory} />
        <Stack.Screen  options={{ title: 'Мои бронирования' }} name="myBookings" component={MyBookings} />
        <Stack.Screen  options={{ title: 'Настройки' }} name="settings" component={Settings} />
        <Stack.Screen  options={{ title: 'Помощь' }} name="help" component={Help} />
    </Stack.Navigator>
)

export default ProfileNavigator

