import React from "react";
import {TouchableOpacity,  View, Text } from "react-native";



interface ProfileItemProps {
    title: string,
    onPress: () => void
}



const ProfileItem: React.FC<ProfileItemProps> = ({title, onPress}) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Text>{title}</Text>
                {/*<MaterialCommunityIcons name="caretright" color='black' size={18} />*/}
            </TouchableOpacity>
        </View>

    )
}

export default ProfileItem
