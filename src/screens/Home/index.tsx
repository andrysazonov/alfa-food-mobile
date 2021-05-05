import React from "react"
import { View, FlatList, Text, StyleSheet } from "react-native"


interface Props {

}

const HomeScreen: React.FC<Props> = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.title}>
                Рекомендации
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 15
    },

})

export default HomeScreen