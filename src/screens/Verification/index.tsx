import React, { useEffect } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

interface Props {

}

const Verification: React.FC<Props> = () => {
    // const [text, onChangeText] = React.useState("Useless Text");
    const [value, onChangeNumber] = React.useState('');

    const navigation = useNavigation();


    useEffect(() => {
        if (value.length == 4) {
            navigation.navigate('ChooseCity')
        }
    }, [value])

    return (
        <View>
            <Text>Введите код-пароль который пришел на указанную почту</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={value}
                placeholder="Code"
                keyboardType="numeric"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});

export default Verification