import React, { useEffect } from "react"

import { View, Text, StyleSheet } from "react-native"


// const navigationOptions = {
//
// }

const BookingTable = (props: any): React.ReactElement => {

    useEffect(() => {
        console.log('current props: ', props)
    }, [])
    const { route: { params: { title, restaurantId}} } = props
    return (
        <View style={styles.container}>
            <Text>Забронируйте стол в ресторане {title}</Text>
        </View>
    )
}
// BookingTable.navigationOptions = navigationOptions

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center"
    }
})



export default BookingTable