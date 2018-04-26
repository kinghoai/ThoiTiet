import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Input } from '../shared/Input';
import { Button } from '../shared/Button';
import * as actionCreators from './actionCreators';

class WeatherFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { txtCityName: '' };
        this.getTempByCityName = this.getTempByCityName.bind(this);
    }

    getTempByCityName() {
        this.props.getWeather(this.state.txtCityName);
        this.setState({ txtCityName: '' });
    }
    
    render() {
        return (
            <View>
                <Input
                    value={this.state.txtCityName}
                    placeholder='Enter your name city'
                    onChangeText={text => this.setState({ txtCityName: text })}
                />
                <Button
                    title= 'Get Weather'
                    type= 'success'
                    onPress={this.getTempByCityName}
                />
            </View>
        )
    };
};

export const WeatherForm = connect(null, actionCreators)(WeatherFormComponent);