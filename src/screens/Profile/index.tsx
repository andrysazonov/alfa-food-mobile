import React from "react"
import { View } from "react-native"
import { useNavigation } from '@react-navigation/native';

import ProfileItem from "./components/ProfileItem";



interface Props {}

const ProfileScreen: React.FC<Props> = () => {

    const navigation = useNavigation()

    return (
        <View>
            <ProfileItem title='Личные данные' onPress={() => navigation.navigate("personalData")} />
            <ProfileItem title='История бронирований' onPress={() => navigation.navigate("bookingHistory")} />
            <ProfileItem title='Мои бронирования' onPress={() => navigation.navigate("myBookings")} />
            <ProfileItem title='Выйти' onPress={() => navigation.navigate('Auth', { screen: "SignIn"})} />
        </View>
    )
}

export default ProfileScreen