import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { Input } from '../shared/Input';
import { Button } from '../shared/Button';

class WeatherFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { txtCityName: '' };
        this.getTempByCityName = this.getTempByCityName.bind(this);
    }

    getTempByCityName(){
        const { dispatch } = this.props;
        dispatch({ type: 'START_GOT_WEATHER' })
        const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
        const { txtCityName } = this.state;
        axios.get(URL + txtCityName)
        .then(response => {
            dispatch({
                type: 'GOT_WEATHER',
                cityName: txtCityName,
                temp: response.data.main.temp,
            });
            this.setState({ txtCityName: '' })
        })
        .catch(error =>{
            dispatch({type: 'GOT_ERROR'});
            this.setState({txtCityName: ''});
            alert(error);
        })
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

export const WeatherForm = connect()(WeatherFormComponent);