import React from "react"
import {View, Text, ScrollView, FlatList} from "react-native"

import BookingItem from "./components/BookingItem";


let fakeBookings = [
    {
        title: 'Delmur',
        id: '123',
        date: '12.01.2014',
        address: 'улица Ленина д 5'
    },
    {
        title: 'Delmur',
        id: '123',
        date: '12.01.2014',
        address: 'улица Ленина д 5'
    },
    {
        title: 'Delmur',
        id: '123',
        date: '12.01.2014',
        address: 'улица Ленина д 5'
    },
    {
        title: 'Delmur',
        id: '123',
        date: '12.01.2014',
        address: 'улица Ленина д 5'
    },
    {
        title: 'Delmur',
        id: '123',
        date: '12.01.2014',
        address: 'улица Ленина д 5'
    },
    {
        title: 'Delmur',
        id: '123',
        date: '12.01.2014',
        address: 'улица Ленина д 5'
    },
    {
        title: 'Delmur',
        id: '123',
        date: '12.01.2014',
        address: 'улица Ленина д 5'
    },
    {
        title: 'Delmur',
        id: '123',
        date: '12.01.2014',
        address: 'улица Ленина д 5'
    },
    {
        title: 'Delmur',
        id: '123',
        date: '12.01.2014',
        address: 'улица Ленина д 5'
    },
]


interface Props {
    // bookings: Booking[]
}


const MyBookingsScreen: React.FC<Props> = () => {
    return (
        <View>
            <FlatList
                contentContainerStyle={{paddingBottom:15}}
                data={fakeBookings}
                keyExtractor={(item) => item.id}
                renderItem={BookingItem}
            />
        </View>
    )
}

export default MyBookingsScreen




