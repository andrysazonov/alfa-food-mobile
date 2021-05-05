import React from "react"
import { View, Text, StyleSheet } from 'react-native'



interface Props {
    item: {
        id: string,
        title: string,
        description: string,
        price: string,
        weight: string
    }
}



function DishCard ({item: {title, description, price, weight}} : Props) {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 25,
        borderWidth: 1,
        borderColor: '#000'
    },
    title: {},
    description: {},
    price: {},
    weight: {}
})

export default DishCard