import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export class Button extends Component {
    getAdditionalStyle() {
        const { type } = this.props;
        if (type === 'success') return { backgroundColor: '#25C73A' };
        if (type === 'danger') return { backgroundColor: '#FF564E' };
        if (type === 'warning') return { backgroundColor: '#FFB827' };
        if (type === 'primary') return { backgroundColor: '#6AA3DA' };
        return { backgroundColor: 'black' };
    }
    render() {
        const { title, type } = this.props;
        const additionalStyle = this.getAdditionalStyle();
        return (
            <TouchableOpacity
                {...this.props}
                style={[styles.buttonContainer, additionalStyle, this.props.style]}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#25C73A',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        height: 40
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});