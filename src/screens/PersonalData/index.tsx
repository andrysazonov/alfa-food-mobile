import React, { useState } from "react"
import {View, Text, TextInput, Button, StyleSheet, ScrollView} from "react-native"
import { reduxForm, Field } from "redux-form";


import {required} from "../../utils/validators";


import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";



function MyTextInput(props : any) {
    const { input, meta: { touched, error, warning }, ...inputProps } = props;

    return (
        <View style={styles.field}>
            <TextInput
                style={styles.textInput}
                {...inputProps}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                value={input.value}
                // style={styles.input}
            />
            {touched && (<Text style={styles.error}>{error}</Text>) ||
            (warning && <Text style={styles.warning}>{warning}</Text>)
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 16,
        marginBottom: 48
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 5
    },
    error: {
        color: 'red'
    },
    warning: {
        color: 'yellow'
    },
    field: {
        marginTop: 12,
        marginBottom: 12
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12
    }
});



function PersonalDataForm(props: any) {
    return (
        <ScrollView keyboardShouldPersistTaps={'handled'}>
            <View>
                <Text>Username</Text>
                <Field
                    name='username'
                    component={MyTextInput}
                    validate={[required]}
                />
            </View>
            <View>
                <Text>Phone</Text>
                <Field
                    name='phone'
                    component={MyTextInput}
                    validate={[required]}
                />
            </View>

            <View>
                <Text>City</Text>
                <Field
                    name='city'
                    component={MyTextInput}
                    validate={[required]}
                />
            </View>
            <Button
                title={'Сохранить'}
                onPress={props.handleSubmit}
            />
        </ScrollView>
    )
}


function NewPasswordForm(props: any) {
    return (
        <ScrollView keyboardShouldPersistTaps={'handled'}>
            <View>
                <Text>Новый пароль</Text>
                <Field
                    name='password'
                    component={MyTextInput}
                    validate={[required]}
                />
            </View>
            <View>
                <Text>Повторите пароль</Text>
                <Field
                    name='repPassword'
                    component={MyTextInput}
                    validate={[required]}
                />
            </View>

            <Button
                title={'Изменить пароль'}
                onPress={props.handleSubmit}
            />
        </ScrollView>
    )
}


const NewPasswordFormReduxForm = reduxForm({form: "NewPassword"})(NewPasswordForm)
const PersonalDataReduxForm = reduxForm({form: "PersonalData"})(PersonalDataForm)


interface Props {

}



const PersonalData: React.FC<Props> = () => {

    // const [username, setUsername] = useState<string>('Den')
    // const [phone, setPhone] = useState<string>('89121232134')
    // const [city, setCity] = useState('Тамбов')
    //
    // const [ newPassword, setNewPassword] = useState<string>('')
    // const [ repNewPassword, setRepNewPassword] = useState<string>('')


    const savePersonalData = (data: { username: string, phone: string, city: string }) => {
        console.log('new Username - ', data.username)
    }

    const saveNewPassword = (data: { password: string, repPassword: string }) => {
        console.log('new Password - ', data.password)
    }

    return (
        <View>
            <View>
                <Text>Form1</Text>
                {/*@ts-ignore*/}
                <PersonalDataReduxForm onSubmit={savePersonalData} />

            </View>
            <View>
                <Text>Form2</Text>
                {/*@ts-ignore*/}
              <NewPasswordFormReduxForm onSubmit={saveNewPassword} />
            </View>
        </View>
    )
}

export default PersonalData









