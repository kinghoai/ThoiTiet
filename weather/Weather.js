import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { WeatherForm } from './WeatherForm';
import { WeatherMessage } from './WeatherMessage';

export class Weather extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style ={styles.container}>
                    <WeatherMessage/>
                    <WeatherForm/>
                </View>
            </Provider>
        )
    };
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
})