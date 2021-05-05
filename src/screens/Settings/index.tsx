import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


interface Props {

}


const Settings: React.FC<Props> = () => {
    return (
        <View>
            <Text style={styles.enableNotification}>Включить уведомления?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    enableNotification: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default Settings