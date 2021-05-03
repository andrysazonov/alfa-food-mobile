import React, { useState} from "react"
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native"
import { useNavigation } from "@react-navigation/native";



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


function RestaurantCardScreen({item: {title, description, address, rating}}: Props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Restaurant', {
            screen: 'RestaurantMainCard',
            params: {
                title: title,
                otherParam: 'anything you want here',
            }
        })}>
            <View style={styles.container}>
                <Image
                    // style={styles.logo}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                        width: 80,
                        height: 100,
                    }}
                />
                <View style={styles.mainPart}>
                    <View style={styles.header} >
                        <Text>
                            {title}
                        </Text>
                        <Text>Raiting</Text>
                    </View>

                    <Text>
                        {description}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    container: {
        width: 400,
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        // padding: 25,
        borderWidth: 1,
        borderColor: '#C4C4C4',

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
        width: 200,
        flexDirection: 'column',

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default RestaurantCardScreen