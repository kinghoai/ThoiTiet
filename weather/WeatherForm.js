import React, { Component } from 'react';
import { View } from 'react-native';
import { Input } from '../shared/Input';
import { Button } from '../shared/Button';

export class WeatherForm extends Component {
    state = { txtCityName: '' };
    render() {
        return (
            <View>
                <Input
                    placeholder='Enter your name city'
                    onChangeText={text => this.setState({ txtCityName: text })}
                />
                <Button
                    title= 'Get Weather'
                    type= 'success'
                />
            </View>
        )
    };
}