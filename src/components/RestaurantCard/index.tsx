import React, { useState} from "react"
import {View, Text, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback, Dimensions} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';


interface Props {
    item: {
        id: string
        title: string
        description: string,
        address?: string,
        rating?: number
    }
}




// const RestaurantCardScreen: React.FC<Props> = (, navigation}) => {
//
//
//
//     // const onClick = () => {
//     //     navigation.navigate("Restaurant")
//     // }
//     // const navigation = useNavigation()
//
// }


function RestaurantCardScreen({item: {id, title, description, address, rating}}: Props) {

    const navigation = useNavigation();


    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Restaurant', {
            screen: 'RestaurantMainCard',
            params: {
                title: title,
                restaurantId: id,
            }
        })}>
            <View style={styles.container}>
                <Image
                    style={styles.preview}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    }}
                />
                <View style={styles.mainPart}>
                    <View style={styles.header} >
                        <Text style={styles.title}>
                            {title}
                        </Text>

                        <View style={styles.ratingBox}>
                            <Text style={styles.rating}>
                                7.5
                            </Text>
                        </View >

                    </View>

                    <Text>
                        {description}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}




const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width - 30,
        flex: 1,
        height: 110,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        backgroundColor: '#FFF',

        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    mainPart: {
        justifyContent: 'flex-start',
        marginLeft: 15,
        padding: 8,
        width:  Math.floor((Dimensions.get('screen').width - 30) * 0.65),
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row'
    },
    preview: {
        width: Math.floor((Dimensions.get('screen').width - 30) * 0.3),
        height: 110,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    title: {
        fontWeight: '500',
        fontSize: 22
    },
    rating: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 12
    },
    ratingBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#C4C4C4',
        width: 30,
        height: 30,
        marginRight: 5
    }
})

export default RestaurantCardScreen