import { createStore } from 'redux';

const defaultState = {
    temp: null,
    cityName: null,
    loading: false,
};

function reducer(state = defaultState, action) {
    if (action.type === 'START_GOT_WEATHER') {
        return { temp: null, cityName: null, loading: true };
    }
    if (action.type === 'GOT_WEATHER') {
        return { temp: action.temp, cityName: action.cityName, loading: false };
    }
    if (action.type === 'GOT_ERROR') {
        return { temp: null, cityName: null, loading: false };
    }
    return state;
}

export const store = createStore(reducer);
