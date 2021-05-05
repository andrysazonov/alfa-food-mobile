import React from "react"
import {View, StyleSheet, ScrollView} from "react-native"
import { useNavigation } from '@react-navigation/native';

import ProfileItem from "./components/ProfileItem";



interface Props {}

const ProfileScreen: React.FC<Props> = () => {

    const navigation = useNavigation()

    return (
        <ScrollView style={styles.container}>
            <View style={styles.section}>
                <View style={styles.content}>
                    <ProfileItem title='Личные данные' onPress={() => navigation.navigate("personalData")} />
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.content}>
                    <ProfileItem title='История бронирований' onPress={() => navigation.navigate("bookingHistory")} />
                    <ProfileItem title='Мои бронирования' onPress={() => navigation.navigate("myBookings")} />
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.content}>

                    <ProfileItem title='Настройки' onPress={() => navigation.navigate("settings")} />
                    <ProfileItem title='Помощь' onPress={() => navigation.navigate("help")} />
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.content}>

                    <ProfileItem title='Выйти' onPress={() => navigation.navigate('Auth', { screen: "SignIn"})} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    content: {
        // marginVertical: 40,
        marginHorizontal: 20
    },
    section: {
        marginVertical: 30,
    }
})

export default ProfileScreen