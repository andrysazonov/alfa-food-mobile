import React from "react"
import { View,  Text, ScrollView } from "react-native"

interface Props {
    item: {
        title: string,
        address: string,
        id: string,
        date: string
    }
}

const BookingItem: React.FC<Props> = ({item: { title, date, address}}) => {

    return (
        <View
            style={{
                marginVertical: 10,
                borderWidth: 2,
                borderColor: 'black',
                paddingHorizontal: 5,
                paddingVertical: 5
            }}
        >
            <Text>
                {title}
            </Text>
            <Text>
                {address}
            </Text>
            <Text>
                {date}
            </Text>
        </View>
    )
}

export default BookingItem













