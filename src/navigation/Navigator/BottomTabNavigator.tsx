import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';

import ProfileNavigator from "./BottomTab/ProfileNavigator"
import SearchNavigator from "./BottomTab/SearchNavigator"
import FavouritesNavigator from "./BottomTab/FavouritesNavigator";
import HomeNavigator from "./BottomTab/HomeNavigator";


const optionsScreen = {
    headerShown: false
}


const BottomTab = createBottomTabNavigator();


function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>["name"]
    color: string
}) {
    return (
        <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
    )
}

const BottomTabNavigator = (): React.ReactElement => {
    return (
        <BottomTab.Navigator
            initialRouteName="profile"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}
        >
            <BottomTab.Screen
                name="home"
                component={HomeNavigator}
                options={{
                    tabBarLabel: 'Лента',
                    tabBarIcon: ({color}) => (
                        <TabBarIcon name="home" color={color} />
                    )
                }}
            />
            <BottomTab.Screen
                name="search"
                options={{
                    tabBarLabel: 'Поиск',
                    tabBarIcon: ({color}) => (
                        <TabBarIcon name="search" color={color} />
                    )
                }}
                component={SearchNavigator}
            />
            <BottomTab.Screen
                name="favourites"
                options={{
                    tabBarLabel: 'Избранное',
                    tabBarIcon: ({color}) => (
                        <TabBarIcon name="heart" color={color} />
                    )
                }}
                component={FavouritesNavigator}
            />
            <BottomTab.Screen
                name="profile"
                options={{
                    tabBarLabel: 'Профиль',
                    tabBarIcon: ({color}) => (
                        <TabBarIcon name="person" color={color} />
                    )
                }}
                component={ProfileNavigator}
            />
        </BottomTab.Navigator>
    )
}

// Home, Search, Favorites, Profile,



export default BottomTabNavigator





