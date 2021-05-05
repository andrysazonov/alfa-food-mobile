import React, { useEffect } from "react"
import {View, Text, TextInput, Button, StyleSheet, ScrollView, AppState} from "react-native"
import {reduxForm, Field} from "redux-form";
import { connect } from "react-redux";

import { RootState } from "../../redux/store";
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
    const values = {
        username: 'den4ik',
        phone: '89121212121',
        city: 'Tambiv'
    }
    useEffect(() => {
        props.initialize(props.loggedInUser)
    }, [])
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

const PersonalDataReduxForm = reduxForm({
    form: "PersonalData",
    enableReinitialize : true
    })(PersonalDataForm)


interface Props {
    loggedInUser: {
        username: string,
        phone: string,
        city: string
        // city: {
        //     name: string,
        //     id: string
        // }
    }
}



const PersonalData: React.FC<any> = ({loggedInUser}) => {

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

    useEffect(() => {
        console.log('LIU: ', loggedInUser)
    }, [])

    return (
        <View>
            <View>
                <Text>First form</Text>
                {/*@ts-ignore*/}
                <PersonalDataReduxForm loggedInUser={loggedInUser} onSubmit={savePersonalData} />

            </View>
            <View>
                <Text>Form2</Text>
                {/*@ts-ignore*/}
              <NewPasswordFormReduxForm onSubmit={saveNewPassword} />
            </View>
        </View>
    )
}

const mapStateToProps = (state: RootState) => ({
    loggedInUser: state.auth.loggedInUser
})

export default connect(mapStateToProps, null)(PersonalData)









