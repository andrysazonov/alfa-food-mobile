import React from "react"
import {View, Text, StyleSheet, Image} from 'react-native'



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
            <Image
                style={styles.image}
                source={{
                    uri: "https://images.unsplash.com/photo-1612204078213-a227dba74093?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                }}
            />
            <View style={styles.detailsBlock}>
                <View style={styles.header}>
                    <View >
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>{price}</Text>
                        <Text style={styles.weight}>{weight}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        marginVertical: 25,

        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#D7D7D7',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,

        //
        // borderWidth: 1,
        // borderColor: '#000',
    },
    detailsBlock: {
        marginLeft: 10,

    },
    header: {
        paddingRight: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    image: {
        width: 90,
        height: 90
    },
    title: {
        maxWidth: 150
    },
    description: {
        fontSize: 13,
        maxWidth: 200
    },
    price: {
        fontSize: 13,
    },
    weight: {
        fontSize: 13,
    }
})

export default DishCard