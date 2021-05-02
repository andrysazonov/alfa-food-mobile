import React from "react"
import { View} from "react-native"
import { Text } from "../../components/common"


interface Props {}

const RestaurantScreen: React.FC<Props> = () => {
    return (
        <View>
            <Text.Basic>Res</Text.Basic>
            <Text.Basic>here props from navigator</Text.Basic>
        </View>
    )
}

export default RestaurantScreen