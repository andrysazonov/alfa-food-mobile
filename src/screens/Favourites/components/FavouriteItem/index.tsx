import React from "react"
import { View,  Text } from "react-native"

interface Props {
    item: {
        title: string,
        description: string,
        rating: number
    }
}


const FavouriteItem: React.FC<Props> = ({item: { title, description, rating}}) => {

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