import React from 'react'
import { View, Text, Button, ScrollView, Platform, TextInput, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native'

import { Field, reduxForm } from "redux-form"
import { required } from "../../utils/validators";

import { useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { login } from "../../redux/redurers/sessionReducer"


const navigationOptions = () => ({
    headerTitle: () => (
        <Text>ВХОД</Text>
    )
})

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
        fontSize: 36,
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


function LoginForm(props : any) {
    const { pristine, submitting, handleSubmit, onSubmit, error, invalid } = props

    return (
        <View>
            <View>
                <Text>Username</Text>
                <Field
                    name='username'
                    component={MyTextInput}
                    validate={[required]}
                />
            </View>
            <View>
                <Text>Password</Text>
                <Field
                    type="password"
                    name='password'
                    component={MyTextInput}
                    validate={[required]}
                />
            </View>
            <View>
                <Button
                    title='ВОЙТИ'
                    onPress={props.handleSubmit}
                    disabled={pristine || submitting || invalid}
                />
            </View>
        </View>
    )
}


export type LoginFormValuesType = {
    username: string,
    password: string
}


type LoginReduxFormType = {
    onSubmit: (data: LoginFormValuesType) => void
}


const LoginReduxForm = reduxForm({form: "login"})(LoginForm)





interface SignInProps {

}

const SignIn = (): React.ReactElement => {

    const navigation = useNavigation()
    const dispatch = useDispatch()


    const onSubmit = (data: LoginFormValuesType) => {
        dispatch(login(data.username, data.password))
        navigation.navigate("BottomTab")
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Войдите в аккаунт</Text>
                    {/*<TextInput placeholder="Username" style={styles.textInput} />*/}
                    {/*@ts-ignore*/}
                    <LoginReduxForm onSubmit={onSubmit} />
                    <View style={styles.btnContainer}>
                        <Button title="У вас еще нет аккаутна" onPress={() => navigation.navigate('SignUp')} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}


SignIn.navigationOptions = navigationOptions

export default SignIn