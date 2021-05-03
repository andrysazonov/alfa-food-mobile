import React from "react"
import { View,  Text, Button } from "react-native"
import { useNavigation } from '@react-navigation/native';


interface Props {
    item: {
        title: string,
        description: string,
        rating: number
    }
}


const FavouriteItem: React.FC<Props> = ({item: { title, description, rating}}) => {


    // const navigation = useNavigation()

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
                {description}
            </Text>
            <Text>
                {rating}
            </Text>
        </View>
    )
}

export default FavouriteItem