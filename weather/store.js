import { createStore } from 'redux';

const defaultState = {
    temp: null,
    cityName: null,
    loading: false,
};

function reducer(state = defaultState, action) {
    return state;
}

export const store = createStore(reducer);
