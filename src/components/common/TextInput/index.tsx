import React from "react"
import {StyleSheet, Text, TextInput, View} from "react-native";


const styles = StyleSheet.create({
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
});



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
            />
            {touched && (<Text style={styles.error}>{error}</Text>) ||
            (warning && <Text style={styles.warning}>{warning}</Text>)
            }

        </View>
    );
}

export default MyTextInput