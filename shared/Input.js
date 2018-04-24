import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export class Input extends Component {
    render() {
        return (
            <TextInput
                {...this.props}
                style={[styles.textInput, this.props.style]}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 10,
        margin: 5
    }
});
