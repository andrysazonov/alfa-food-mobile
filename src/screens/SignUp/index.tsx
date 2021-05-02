import React from 'react'
import {
    View,
    Text,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Button, StyleSheet
} from 'react-native'
import { reduxForm, Field } from "redux-form";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {login, register} from "../../redux/redurers/sessionReducer";
import {LoginFormValuesType} from "../SignIn";
import {required} from "../../utils/validators";

const navigationOptions = () => ({
    headerTitle: () => (
        <Text>РЕГИСТРАЦИЯ</Text>
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


function RegisterForm(props: any) {
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
                <Text>Password</Text>
                <Field
                    name='password'
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
                <Text>Email</Text>
                <Field
                    name='email'
                    component={MyTextInput}
                    validate={[required]}
                />
            </View>
            <Button
                title={'ДАЛЕЕ'}
                onPress={props.handleSubmit}
            />
        </ScrollView>
    )
}

type RegisterFormValuesType = {
    username: string,
    password: string,
    phone: string,
    email: string
}

const RegisterReduxForm = reduxForm({form: "register"})(RegisterForm)


interface Props {

}

const SignUp = () : React.ReactElement => {

    const navigation = useNavigation()
    const dispatch = useDispatch()


    const onSubmit = (data: RegisterFormValuesType) => {
        // dispatch(register(data.email, data.password, data.phone, data.username))
        navigation.navigate("PhoneVerification")
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Enter your Name, Email, and password for sign up.
                    </Text>
                    {/*@ts-ignore*/}
                    <RegisterReduxForm onSubmit={onSubmit} />
                    <View style={styles.btnContainer}>
                        <Button title="У вас уже есть аккаунт" onPress={() => navigation.navigate('SignIn')} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

SignUp.navigationOptions  = navigationOptions

export default SignUp