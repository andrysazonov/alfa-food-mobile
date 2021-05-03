import React from "react";
import {TouchableOpacity, View, Text, StyleSheet, Dimensions} from "react-native";



interface ProfileItemProps {
    title: string,
    onPress: () => void
}



const ProfileItem: React.FC<ProfileItemProps> = ({title, onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text>{title}</Text>
                {/*<MaterialCommunityIcons name="caretright" color='black' size={18} />*/}
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginBottom: 20,
        // alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 3,
        width: Dimensions.get('screen').width - 40
    }
})

export default ProfileItem
