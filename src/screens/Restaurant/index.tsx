import React, { useEffect } from "react"
import {View, Text, Button, Image, Dimensions} from "react-native"


interface Props {
    navigation: any,
    route: any
}

const RestaurantScreen: React.FC<Props> = ({navigation, route}) => {
    const { title, otherParam } = route.params;


    // useEffect(() => {
    //     console.log(route)
    // }, [])

    return (
        <View>
            <Image
                // style={styles.logo}
                source={{
                    uri: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    width: Dimensions.get("screen").width,
                    height: 100,
                }}
            />
            <Text>Hello</Text>

            <Text> Param itemId : {title}</Text>

            <Button
                title={'Go back '}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default RestaurantScreen