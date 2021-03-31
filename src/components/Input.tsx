import React, { Component } from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";


interface Props extends TextInputProps {
    error?: any;
}

export class Input extends Component<Props, {}> {
    render() {
        const { error } = this.props;
        return (
            <TextInput
                {...this.props}
                style={[
                    styles.inputStyle,
                ]}
            />
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 40,
        borderBottomWidth: 1,
        fontSize: 16,
        marginVertical: 10
    }
});