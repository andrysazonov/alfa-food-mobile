import React, { useState } from "react"
import { View, ScrollView, Picker, Button, Text } from "react-native"


import { useNavigation } from '@react-navigation/native';
import Verification from "../Verification";


interface Props {}

const navigationOptions = () => ({
    headerTitle: () => (
        <Text>ВЫБЕРИТЕ ГОРОД</Text>
    )
})



const ChooseCity = (): React.ReactElement => {

    const navigation = useNavigation()

    const [ selectedValue, setSelectedValue ] = useState('Екатеринбург')

    return (
        <View>
            <Text>
                Выберите город
            </Text>

            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Москва" value="1231" />
                <Picker.Item label="Новосибирск" value="3123" />
                <Picker.Item label="Уфа" value="3123" />
                <Picker.Item label="Тамбов" value="3134" />
                <Picker.Item label="Тамбов" value="3121" />
                <Picker.Item label="Тамбов" value="3122" />
                <Picker.Item label="Тамбов" value="3143" />
                <Picker.Item label="Тамбов" value="3144" />

            </Picker>


            <Button
                title={"ДАЛЕЕ"}
                onPress={() => navigation.navigate('BottomTab')}
            />
        </View>
    )
}

ChooseCity.navigationOptions = navigationOptions

export default ChooseCity