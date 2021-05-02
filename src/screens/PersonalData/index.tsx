import React from "react"
import { View, Text, TextInput, Button } from "react-native"



interface Props {

}


const PersonalData: React.FC<Props> = () => {
    return (
        <View>

            <View>
                <TextInput value='Den' onChange={() => console.log('some changes')} label={'Username'} />
                <TextInput value='Den' onChange={() => console.log('some changes')} label={'Phone'} />
                <TextInput value='Den' onChange={() => console.log('some changes')} label={'City'} />
                <Button title={'Сохранить'} onPress={() => {}} />
            </View>
            <View>
                <Text>
                    Пароль
                </Text>
                <TextInput value='Den' onChange={() => console.log('some changes')} label={'Новый пароль'} />
                <TextInput value='Den' onChange={() => console.log('some changes')} label={'Повторите пароль'} />
                <Button onPress={() => {}}>
                    <Text>
                        Изменить пароль
                    </Text>
                </Button>
            </View>

        </View>
    )
}

export default PersonalData









